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
        <div className='px-3 lg:px-0 pb-8'>
            <div className="lg:hidden w-full h-full lg:w-2/6 lg:ml-5 bg-white rounded-lg my-5">
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="trending-coins">
      <h2 className="text-2xl font-semibold mb-4 text-center">Trending Coins (24h)</h2>
      <ul>   
        {trendingCoins.map((coin, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 rounded-lg mb-3"
          >
            
            <div className="flex items-center">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-10 h-10 mr-4"
              />
              <span className="text-gray-800 font-medium">{coin.item.name}</span>
            </div>
           
            <span
              className={`p-2 rounded-lg text-sm font-semibold flex items-center ${
                coin.percentageChange >= 0
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {coin.percentageChange >= 0 ? (
                <i className="fa-solid fa-caret-up mr-1"></i>
              ) : (
                <i className="fa-solid fa-caret-down mr-1"></i>
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
