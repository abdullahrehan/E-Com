import React, { Component, useState } from 'react'
import './Calculator.css'

function Calculator(){


let [count,setCounte]=useState("");

/*Alow to change input valuen*/    
const handler=(event)=>{
setCounte(event.target.value);}

/*Alow buttons to write on screen*/
const click=(event)=>{
setCounte(count+event.target.innerText);}

/*Alow back to remove character on screen*/
function back(event){
setCounte(count.slice(0,-1))}

/*Alow clear to clear screen*/
function clear(){
setCounte("")}

/*Alow =  to evaluate what is on screen*/
function evaluate(){
try{
setCounte(eval(count))
}catch(error){
setCounte("error")}}


return (
    
    <div className="Cal">
    <input onChange={handler} value={count}/>    
    <button onClick={clear}>C</button>
    <button onClick={click}>+</button>
    <button onClick={click}>-</button>
    <button onClick={back}>Back</button>
    <button onClick={click}>7</button>
    <button onClick={click}>8</button>
    <button onClick={click}>9</button>
    <button onClick={click}>*</button>
    <button onClick={click}>4</button>
    <button onClick={click}>5</button>
    <button onClick={click}>6</button>
    <button onClick={click}>/</button>
    <button onClick={click}>1</button>
    <button onClick={click}>2</button>
    <button onClick={click}>3</button>
    <button onClick={click}>.</button>
    <button onClick={evaluate} id={'evaluate'}>=</button>
    </div>
    


    );
}
        
 
export default Calculator;