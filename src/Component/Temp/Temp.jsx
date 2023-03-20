import React, { useState } from "react";
import Button from "../Button/Button";
import './Temp.css'


const Temp = () => {
      const [increaseTemp, setIncreaseTemp] = useState(10);
      const [color, setColor] = useState("cold")
      const [ show, setShow] = useState(false);
      const handleIncrease = () => {
            if(increaseTemp === 40 ) {
                  return;
            }
            if(increaseTemp >= 38) {
                  setColor("danger");
                  setShow(true)
                  return;
            
            }
            if(increaseTemp >= 21){
                  setColor("very")
                  setShow(false)

            }
            if(increaseTemp <= 18) {
                  setColor("hot")
                  setShow(false)
            }
            if(increaseTemp <= 18) {
                  setColor("hot") 
                  setShow(false)
            }
            
            setIncreaseTemp((prevInCreaseTemp) => {
                  return  (
                         prevInCreaseTemp + 1
                  )
                 

            })
      };
      const handleDecrease = () => {
            if(increaseTemp === 0 ) {
                  setColor("grey")
                  return;
            }
            if(increaseTemp >= 21){
                  setColor("very")
                  setShow(false)

            }
            if(increaseTemp <= 18) {
                  setColor("hot")
                 
            }
            if(increaseTemp <= 15){
                  setColor("cold")

            }
            setIncreaseTemp((prevInCreaseTemp) => {
                  return (
                        prevInCreaseTemp - 1
                  )
            })
      }
      return (
           <div className="temp__div" >
                 <h2>Temperature Range</h2>
                 <div className={`temp__divs ${color}`} >
                     {increaseTemp}ºC
                 </div>
                 {show && <p className="errors">visit your doctor</p>}
                 <Button handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>
           </div>
      )
}
export default Temp;