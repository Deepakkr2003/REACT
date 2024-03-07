/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useRef, useState } from 'react';
import koin7 from '../assets/koin7.jpeg'
import koin8 from '../assets/koin8.png'

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
            .catch(error => {
                console.error('Error fetching data:', error);
        });

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "width":"980",
          "height":"610",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "white",
          "gridColor": "rgba(242, 242, 242, 0.06)",
          "withdateranges": true,
          "allow_symbol_change": true,
          "details": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
        container.current.appendChild(script);

        // Cleanup function to remove the script when component unmounts
        return () => {
            container.current.removeChild(script);
        };

    }, []);


    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then(response => response.json())
            .then(data => {
                // Get the top 3 trending coins
                const topThreeCoins = data.coins.slice(0, 3);
                // Fetch additional data for each coin to get percentage change
                Promise.all(
                    topThreeCoins.map(coin => (
                        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.item.id}&vs_currencies=usd&include_24hr_change=true`)
                            .then(response => response.json())
                            .then(priceData => ({
                                ...coin,
                                percentageChange: priceData[coin.item.id].usd_24h_change
                            }))
                    ))
                ).then(updatedCoins => setTrendingCoins(updatedCoins))
                    .catch(error => {
                        console.error('Error fetching coin data:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching trending coins:', error);
            });
    }, []);





  return (
    <div>
        <div className='ml-5'>
            <p>Cryptocurrenies <i className="fa-solid fa-greater-than pl-2"></i> <i className="fa-solid fa-greater-than "></i> <span className='font-bold pl-1'>Bitcoin</span></p>
        </div>
        <div className=' md:flex'>
        <div name="bitcoin"
        className='w-full h-full text-white md:w-4/6 md:ml-5 pt-20 bg-white rounded-lg my-5'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='flex mx-8 space-x-2 '>
                    <img className="w-8 h-8" src={ koin7 } alt="Bitcoin Logo" />
                    <h1 className='text-xl text-black font-bold'>Bitcoin</h1>
                    <h1 className='text-gray-400'>BTC</h1>
                    <h1 className='text-white bg-gray-500 rounded-sm h-8 w-20'>Rank #1</h1>
                </div>
                <div className='flex mx-8 my-4 space-x-6'>
                    <div>
                        <p className='text-gray-400' >USD: ${ bitcoinPrice }</p>
                        <p className='text-gray-400'>INR: { bitcoinPriceINR }</p>
                    </div>
                    <p className=' bg-green-200 rounded-lg h-8 w-30 text-green-400'>{ bitcoinChange}% </p>
                    <p className='text-black'>(24H)</p>

                </div>
                <div>
                    <div className=" tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                        <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
                        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="parent-container">
            <div className="first-div">
            <div name="getstarted"
            className='hidden md:block w-full h-full md:w-5/6 md:ml-5  bg-blue-600 rounded-lg my-5'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className='text-2xl font-bold flex justify-center text-white'>Get Started with KoinX</p>
                    <p className='text-2xl font-bold flex justify-center text-white'>for Free</p>
                </div>
                <div className='mt-6'>
                    <p className='text-white flex justify-center'>with our range of features that you can equip for</p>
                    <p className='text-white flex justify-center'>free, KoinX allows you to be more educated and </p>
                    <p className='text-white flex justify-center'>aware of your tax reports.</p>
                </div>
                <div className='flex justify-center'>
                    <img src={koin8} alt="" className='rounded-xl'/>
                </div>
                <div className='flex justify-center mt-7'>
                    <h1 className='text-3xl text-black font-bold bg-white rounded-lg p-6'>Get Started for FREE <i className="fa-solid fa-arrow-right pl-2"></i></h1>
                </div>
            </div>
        </div>
            </div>
            <div className="second-div">
            <div className='w-full h-full hidden md:block md:w-5/6 md:ml-5  bg-white rounded-lg my-5'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="trending-coins">
                <h2 className='text-2xl font-semibold'>Trending Coins (24h)</h2>
                <ul>
                    { trendingCoins.map((coin, index) => (
                        <li key={index} className='flex m-3'>
                            <img src={coin.item.thumb} alt={coin.item.name} className='w-8 mr-4'/>
                            {coin.item.name}<span className={`ml-16 p-2 rounded-xl h-12 text-white ${coin.percentageChange >= 0 ? 'bg-green-300 text-green-600' : 'bg-red-300 text-red-600'}`}>
                                {coin.percentageChange >= 0 ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                                {coin.percentageChange.toFixed(2)}%
                            </span>
                        </li>
                    )) }
                </ul>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        
       
        </div>
        </div>
    
  )
}

export default Bitcoin
