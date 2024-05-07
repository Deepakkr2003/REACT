/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import circle from '../Assests/circle.png'
import cross from '../Assests/cross.png'

let data = ["","","","","","","","",""]

function TicTacToe() {

    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);
    let titleRef=useRef(null);
    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);

    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img  src='${cross}'  >`
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML=`<img  src='${circle}' >`
            data[num]="o";
            setCount(++count);
        }
        checkWin()
    }

    const checkWin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        let imageSize = "36px"; // Set the desired size of the image
        let padsize="10px"
        let imageSrc = winner === "x" ? cross : circle;
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${imageSrc} style="width: ${imageSize}; height: ${imageSize}; margin-right:${padsize}; margin-left:${padsize}"> wins`
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${imageSrc} style="width: ${imageSize}; height: ${imageSize}; margin-right:${padsize}; margin-left:${padsize}"  > wins`
        }
    }

    const reset = () => {
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML='Tic Tac Toe';
        box_array.forEach((e)=>{
            e.current.innerHTML="";
        })
        setCount(0);
    }

  return (
    <div className='bg-custom-color h-auto'>
        <div className='text-center'>
            <h1 className='pt-16 text-white text-4xl font-bold flex justify-center items-center ' ref={titleRef}>Tic Tac Toe</h1>

            <div className=' flex m-auto justify-center items-center mt-8'>
                <div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box1} onClick={(e)=>{toggle(e,0)}} ></div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box2} onClick={(e)=>{toggle(e,1)}} ></div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box3} onClick={(e)=>{toggle(e,2)}} ></div>
                </div>
                <div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box4} onClick={(e)=>{toggle(e,3)}} ></div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box5} onClick={(e)=>{toggle(e,4)}} ></div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box6} onClick={(e)=>{toggle(e,5)}} ></div>
                </div>
                <div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box7} onClick={(e)=>{toggle(e,6)}} ></div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box8} onClick={(e)=>{toggle(e,7)}} ></div>
                    <div className='flex h-40 w-40 bg-custom-color1 border border-custom-color rounded-xl cursor-pointer p-8' ref={box9} onClick={(e)=>{toggle(e,8)}} ></div>
                </div>
            </div>

            <button className='w-32 h-16 border-none outline-none cursor-pointer border rounded-2xl font-semibold mt-10 bg-custom-color1 text-custom-color2 mb-8' onClick={()=>{reset()}}>Reset</button>
        </div>      
    </div>
  )
}

export default TicTacToe
