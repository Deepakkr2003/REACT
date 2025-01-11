/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import koin7 from '../assets/koin7.jpeg';
import koin8 from '../assets/koin8.png';

function Bitcoin() {
    const container = useRef();

    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [bitcoinPriceINR, setBitcoinPriceINR] = useState(null);
    const [bitcoinChange, setBitcoinChange] = useState(null);
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
            .then(response => response.json())
            .then(data => {
                setBitcoinPrice(data.bitcoin.usd);
                setBitcoinPriceINR(data.bitcoin.inr);
                setBitcoinChange(data.bitcoin['usd_24h_change']);
            })
            .catch(error => console.error('Error fetching data:', error));

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
        {
            "width": "100%",
            "height": "100%",
            "symbol": "BITSTAMP:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "2",
            "locale": "en",
            "enable_publishing": false,
            "withdateranges": true,
            "allow_symbol_change": true,
            "details": true,
            "calendar": false
        }`;
        container.current.appendChild(script);

        return () => {
            container.current.removeChild(script);
        };
    }, []);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then(response => response.json())
            .then(data => {
                const topThreeCoins = data.coins.slice(0, 3);
                Promise.all(
                    topThreeCoins.map(coin =>
                        fetch(
                            `https://api.coingecko.com/api/v3/simple/price?ids=${coin.item.id}&vs_currencies=usd&include_24hr_change=true`
                        )
                            .then(response => response.json())
                            .then(priceData => ({
                                ...coin,
                                percentageChange: priceData[coin.item.id].usd_24h_change,
                            }))
                    )
                )
                    .then(updatedCoins => setTrendingCoins(updatedCoins))
                    .catch(error => console.error('Error fetching coin data:', error));
            })
            .catch(error => console.error('Error fetching trending coins:', error));
    }, []);

    return (
        <div className="p-4">
            <div className="ml-5">
                <p>
                    Cryptocurrencies{' '}
                    <i className="fa-solid fa-greater-than pl-2"></i>{' '}
                    <i className="fa-solid fa-greater-than "></i>{' '}
                    <span className="font-bold pl-1">Bitcoin</span>
                </p>
            </div>
            <div className="md:flex flex-wrap ">
                <div className="w-full lg:w-[70%] bg-white md:pb-36  rounded-lg my-5 p-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <img className="w-8 h-8" src={koin7} alt="Bitcoin Logo" />
                        <h1 className="text-xl text-black font-bold">Bitcoin</h1>
                        <h1 className="text-gray-400">BTC</h1>
                        <h1 className="text-white bg-gray-500 rounded-lg text-center h-8 px-4">Rank #1</h1>
                    </div>
                    <div className="flex items-center space-x-6 mb-4">
                        <div>
                            <p className="text-gray-400">USD: ${bitcoinPrice}</p>
                            <p className="text-gray-400">INR: {bitcoinPriceINR}</p>
                        </div>
                        <p
                            className={`${
                                bitcoinChange >= 0 ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'
                            } rounded-lg h-8 px-4`}
                        >
                            {bitcoinChange?.toFixed(2)}%
                        </p>
                        <p className="text-black">(24H)</p>
                    </div>
                    <div ref={container} className="tradingview-widget-container w-full h-96"></div>
                </div>
                <div className="hidden lg:block ml-4 mt-5 w-full md:w-[28%] space-y-5">
                    <div className="bg-blue-600 rounded-lg p-4 text-white text-center">
                        <p className="text-2xl font-bold">Get Started with KoinX</p>
                        <p>for Free</p>
                        <p className="mt-4">
                            With our range of features, KoinX allows you to be more educated and aware of your tax
                            reports.
                        </p>
                        <img src={koin8} alt="" className="rounded-xl mt-4 mx-auto" />
                        <button className="mt-4 bg-white text-blue-600 font-bold text-xl px-4 py-2 rounded">
                            Get Started for FREE <i className="fa-solid fa-arrow-right pl-2"></i>
                        </button>
                    </div>
                    <div className="bg-white rounded-lg p-4 hidden lg:block">
                        <h2 className="text-2xl font-semibold mb-4">Trending Coins (24h)</h2>
                        <ul>
                            {trendingCoins.map((coin, index) => (
                                <li key={index} className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-4">
                                        <img src={coin.item.thumb} alt={coin.item.name} className="w-8" />
                                        <p>{coin.item.name}</p>
                                    </div>
                                    <span
                                        className={`px-4 py-2 rounded-xl ${
                                            coin.percentageChange >= 0
                                                ? 'bg-green-300 text-green-600'
                                                : 'bg-red-300 text-red-600'
                                        }`}
                                    >
                                        {coin.percentageChange >= 0 ? (
                                            <i className="fa-solid fa-caret-up"></i>
                                        ) : (
                                            <i className="fa-solid fa-caret-down"></i>
                                        )}
                                        {coin.percentageChange.toFixed(2)}%
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bitcoin;
