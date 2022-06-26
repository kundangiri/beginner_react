import React,{useState} from "react";
const Counter=()=>{
const[count, setCount]=useState(0)
return(
<div>

<button
onClick={() =>setCount(count + 1)}>+</button>
<h1>{count}</h1>

<button
onClick={()=>setCount(count>0? count -1:count)}>-</button>
</div>

)
}
export default Counter;