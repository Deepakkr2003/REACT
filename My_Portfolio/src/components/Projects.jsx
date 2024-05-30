/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import snake from '../assests/Project/snake.jpg'
import bmi from '../assests/Project/bmi.png'
import calc from '../assests/Project/calc.jpg'
import clock from '../assests/Project/clock.png'
import weather from '../assests/Project/weather.png'
import currency from '../assests/Project/currency.jpg'
import password from '../assests/Project/password.png'
import todo from '../assests/Project/todo.png'
import webpage from '../assests/Project/webpage.png'
import guess from '../assests/Project/guess.png'
import tic from '../assests/Project/tic-tac-toe.jpg'
import infinite from '../assests/Project/unlim.png'


function Projects() {
    const projects=[
        {
           id:1, 
           src:snake,
           demolink:'https://snake-game-minia.netlify.app/',
           githubLink:'https://github.com/Deepakkr2003/PROJECT/tree/main/SnakeGame',
        } ,  
        {
           id:2, 
           src:bmi,
           demolink:'https://bmi-calculator-11.netlify.app/',
           githubLink:'https://github.com/Deepakkr2003/PROJECT/tree/main/BMI',
        } ,  
        {
           id:3, 
           src:calc,
           demolink:'https://calculator-js12.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/PROJECT/tree/main/Calculator_1',
        } ,  
        {
           id:4, 
           src:clock,
           demolink:'https://digital-1-clock.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/PROJECT/tree/main/DigitalClock',
        } ,  
        {
           id:5, 
           src:weather,
           demolink:'https://my-weather-app2.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/REACT/tree/main/Weather_App',
        } ,  
        {
           id:6, 
           src:currency,
           demolink:'https://mycurrencyconvertorapp.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/REACT/tree/main/currencyConvertor',
        } ,  
        {
           id:7, 
           src:password,
           demolink:'https://password-generator-app1.netlify.app/',
           githubLink:'https://github.com/Deepakkr2003/REACT/tree/main/Password_Generator',
        } ,  
        {
           id:8, 
           src:todo,
           demolink:'https://my-todoapp-react1.netlify.app/',
           githubLink:'https://github.com/Deepakkr2003/REACT/tree/main/reduxtoolkitTodo',
        } ,  
        {
           id:9, 
           src:infinite,
           demolink:'https://infinite-color.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/PROJECT/tree/main/Unlimited%20colour',
        } ,  
        {
           id:10, 
           src:webpage,
           demolink:'https://envatopage.netlify.app/',
           githubLink:'https://github.com/Deepakkr2003/REACT/tree/main/envato_market',
        } ,  
        {
           id:11, 
           src:guess,
           demolink:'https://guess-a-no.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/PROJECT/tree/main/GuessANumber',
        } ,  
          
        {
           id:12, 
           src:tic,
           demolink:'tic-tac-toe-go.netlify.app',
           githubLink:'https://github.com/Deepakkr2003/REACT/tree/main/Tic_Tac_Toe',
        } ,  
    ]

  return (
    <div name='project' className='bg-gradient-to-b from-custom-bg to-custom-dark w-full text-white md:h-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white' >Projects</p>
            <p className='py-6 text-2xl font-semibold text-white'>Check out some of my work right here</p>
        </div>


        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 md:h-full '>
        {projects.map(({id,src,demolink,githubLink})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img 
                    src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                <a href={demolink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-400 font-bold'>Demo</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-400 font-bold'>Code</a>
                </div>
            </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default Projects
