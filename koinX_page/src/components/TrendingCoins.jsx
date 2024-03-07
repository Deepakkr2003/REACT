/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function TrendingCoins() {
    const [trendingCoins, setTrendingCoins] = useState([]);

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
        <div className='md:hidden w-full h-full md:w-2/6 md:ml-5  bg-white rounded-lg my-5'>
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
    );
}
