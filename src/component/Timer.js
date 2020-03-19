import React from 'react'

const Time=()=>{
  
  let time=6;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time % 3600 )/ 60);
  let seconds = Math.floor(time % 60);
  if (hours<10) {hours=(String(hours).padStart(2,'0'))}
  if (minutes<10) {minutes=(String(minutes).padStart(2,'0')) }
  if (seconds<10) {seconds=(String(seconds).padStart(2,'0'))}
  return(<h1>{hours}:{minutes}:{seconds}</h1>)
}
// const time=()=>{
  
//   let time=6;
//   let hours = Math.floor(time/3600);
//   let minutes = Math.floor((time % 3600 )/ 60);
//   let seconds = Math.floor(time % 60);
//   if (hours<10) {hours=(String(hours).padStart(2,'0'))}
//   if (minutes<10) {minutes=(String(minutes).padStart(2,'0')) }
//   if (seconds<10) {seconds=(String(seconds).padStart(2,'0'))}
//   return(<h1>{hours}:{minutes}:{seconds}</h1>)
// }

const Timer = () => {
//     let time=6;
// let hours = Math.floor(time/3600);
// let minutes = Math.floor((time % 3600 )/ 60);
// let seconds = Math.floor(time % 60);
// if (hours<10) {hours=(String(hours).padStart(2,'0'))}
// if (minutes<10) {minutes=(String(minutes).padStart(2,'0')) }
// if (seconds<10) {seconds=(String(seconds).padStart(2,'0'))}

   return (
       <div>
      <Time/>
      {/* {time()} */}
      <div className='affich'>
        <span>Hour </span>
        <span> Minute</span>
        <span> Second</span>
      </div>
       </div>
   )}

export default Timer
