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
   const projects = [
      {
         id: 1, 
         title: 'Snake Game',
         src: snake,
         demolink: 'https://snake-game-minia.netlify.app/',
         githubLink: 'https://github.com/Deepakkr2003/PROJECT/tree/main/SnakeGame',
         description: 'A classic snake game built with JavaScript and HTML5 Canvas.',
         technologies: ['JavaScript', 'HTML5', 'CSS']
      },
      {
         id: 2, 
         title: 'BMI Calculator',
         src: bmi,
         demolink: 'https://bmi-calculator-11.netlify.app/',
         githubLink: 'https://github.com/Deepakkr2003/PROJECT/tree/main/BMI',
         description: 'A BMI calculator that helps users determine their Body Mass Index.',
         technologies: ['JavaScript', 'HTML5', 'CSS']
      },  
      {
         id: 3, 
         title: 'Calculator',
         src: calc,
         demolink: 'https://calculator-js12.netlify.app',
         githubLink: 'https://github.com/Deepakkr2003/PROJECT/tree/main/Calculator_1',
         description: 'A simple calculator for performing basic arithmetic operations.',
         technologies: ['JavaScript', 'HTML5', 'CSS']
      },  
      {
         id: 4, 
         title: 'Digital Clock',
         src: clock,
         demolink: 'https://digital-1-clock.netlify.app',
         githubLink: 'https://github.com/Deepakkr2003/PROJECT/tree/main/DigitalClock',
         description: 'A digital clock displaying the current time in a user-friendly interface.',
         technologies: ['JavaScript', 'HTML5', 'CSS']
      },  
      {
         id: 5, 
         title: 'Weather App',
         src: weather,
         demolink: 'https://my-weather-app2.netlify.app',
         githubLink: 'https://github.com/Deepakkr2003/REACT/tree/main/Weather_App',
         description: 'A weather application showing current weather data fetched from an API.',
         technologies: ['React', 'API', 'CSS']
      },  
      {
         id: 6, 
         title: 'Currency Converter',
         src: currency,
         demolink: 'https://mycurrencyconvertorapp.netlify.app',
         githubLink: 'https://github.com/Deepakkr2003/REACT/tree/main/currencyConvertor',
         description: 'A currency converter that helps users convert between different currencies.',
         technologies: ['React', 'API', 'CSS']
      },  
      {
         id: 7, 
         title: 'Password Generator',
         src: password,
         demolink: 'https://password-generator-app1.netlify.app/',
         githubLink: 'https://github.com/Deepakkr2003/REACT/tree/main/Password_Generator',
         description: 'A password generator that creates strong and random passwords.',
         technologies: ['React', 'JavaScript', 'CSS']
      },  
      {
         id: 8, 
         title: 'To-Do App',
         src: todo,
         demolink: 'https://my-todoapp-react1.netlify.app/',
         githubLink: 'https://github.com/Deepakkr2003/REACT/tree/main/reduxtoolkitTodo',
         description: 'A to-do app to help users manage their tasks effectively.',
         technologies: ['React', 'Redux Toolkit', 'CSS']
      },  
      {
         id: 9, 
         title: 'Infinite Color Generator',
         src: infinite,
         demolink: 'https://infinite-color.netlify.app',
         githubLink: 'https://github.com/Deepakkr2003/PROJECT/tree/main/Unlimited%20colour',
         description: 'An infinite color generator that provides random colors on each click.',
         technologies: ['JavaScript', 'HTML5', 'CSS']
      },  
      {
         id: 10, 
         title: 'Webpage Design',
         src: webpage,
         demolink: 'https://envatopage.netlify.app/',
         githubLink: 'https://github.com/Deepakkr2003/REACT/tree/main/envato_market',
         description: 'A webpage design inspired by Envato Market showcasing various products.',
         technologies: ['React', 'CSS', 'HTML5']
      },  
      {
         id: 11, 
         title: 'Guess a Number Game',
         src: guess,
         demolink: 'https://guess-a-no.netlify.app',
         githubLink: 'https://github.com/Deepakkr2003/PROJECT/tree/main/GuessANumber',
         description: 'A number guessing game where users try to guess a randomly generated number.',
         technologies: ['JavaScript', 'HTML5', 'CSS']
      },  
      {
         id: 12, 
         title: 'Tic-Tac-Toe Game',
         src: tic,
         demolink: 'https://tic-tac-toe-go.netlify.app/',
         githubLink: 'https://github.com/Deepakkr2003/REACT/tree/main/Tic_Tac_Toe',
         description: 'A classic tic-tac-toe game built with React.',
         technologies: ['React', 'JavaScript', 'CSS']
      },  
  ]
  
  

  return (
    <div name='project' className='bg-gradient-to-b from-custom-bg to-custom-dark w-full text-white md:h-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white' >Projects</p>
            <p className='py-6 text-2xl font-semibold text-white'>Check out some of my work right here</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 md:h-full '>
         {projects.map(({id, title, src, demolink, githubLink, description, technologies}) => (
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img 
                src={src} 
                alt={title} 
                className='rounded-md duration-200 hover:scale-105'
            />
            <div className='p-4'>
                <h2 className='text-2xl font-bold text-white'>{title}</h2>
                <p className='text-gray-400 my-2'>{description}</p>
                <p className='text-gray-400 font-bold'>{technologies.join(', ')}</p>
            </div>
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
