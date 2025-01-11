/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

function Youmayalsolike() {

    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then(response => response.json())
            .then(data => {
                setTrendingCoins(data.coins);
            })
            .catch(error => {
                console.error('Error fetching trending coins:', error);
            });
    }, []);

    return (
        <div className='px-3 lg:px-0'>
            <div className='w-full h-full  bg-white rounded-lg my-5'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                
                    <h1 className='mb-5 text-2xl font-bold mt-12'>You May Also Like</h1>
                    <div className="mt-4 overflow-x-auto">
                        <ul className="flex">
                            {trendingCoins.map((coin, index) => (
                                <li key={index} className="flex-shrink-0 mr-4">
                                    <div className="coin-info flex flex-col space-y-2">
                                        <div className="flex items-center space-x-4">
                                            <img src={coin.item.thumb} alt={coin.item.name} className="w-6 h-6" />
                                            <span>{coin.item.symbol}</span>
                                            <span className={`coin-info ${coin.item.price_change_percentage_24h >= 0 ? 'bg-green-200 border-green-500' : 'bg-orange-200 border-orange-500'}`}>{coin.item.price_change_percentage_24h}%</span>
                                        </div>
                                        <div>
                                            <span>{coin.item.name}</span>
                                            <span>Price: {coin.item.price}</span>
                                            <span>Graph:<img src={coin.item.sparkline} alt="Sparkline" /></span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                <h1 className='mb-5 text-2xl font-bold mt-12'>Trending Coins</h1>
                <div className="mt-4 overflow-x-auto">
                    <ul className="flex">
                        {trendingCoins.map((coin, index) => (
                            <li key={index} className="flex-shrink-0 mr-4">
                                <div className="coin-info flex flex-col space-y-2">
                                    <div className="flex items-center space-x-4">
                                        <img src={coin.item.thumb} alt={coin.item.name} className="w-6 h-6" />
                                        <span>{coin.item.symbol}</span>
                                        <span className={`coin-info ${coin.item.price_change_percentage_24h >= 0 ? 'bg-green-200 border-green-500' : 'bg-orange-200 border-orange-500'}`}>{coin.item.price_change_percentage_24h}%</span>
                                    </div>
                                    <div>
                                        <span>{coin.item.name}</span>
                                        <span>Price: {coin.item.price}</span>
                                        <span>Graph:<img src={coin.item.sparkline} alt="Sparkline" /></span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </div>
       
    );
}

export default Youmayalsolike;
