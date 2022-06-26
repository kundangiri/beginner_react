import React,{useState} from "react";
const Counter=()=>{
const[state, stateCount]=useState(0)
return(
<div>

<button
onClick={() =>console.log("add")}>+</button>
<h1>{Count}</h1>

<button
onClick={()=>console.log("subtract")}>-</button>
</div>

)
}
export default Counter;