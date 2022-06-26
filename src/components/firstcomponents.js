import React from "react";
const First = ({ title, name, age, subjects, location, gender }) => {
	console.log("First ")
	return (<div>
		<h1>i am first components!</h1>
		<p>
			this is certify that
			<strong>
				{gender === "M" ? "Mr" : "Ms"}{name} has aged
				<i>
					{age}</i>
			</strong> has passed in the following subjects
		</p>
		<ul>
			{subjects.map((s) => (
				<li>{s}</li>))}

		</ul>
		<p>
			<strong>
				his address in our record is {location.latitude}N,
				{location.longitude}E
			</strong>
		</p>
	</div>)
}
const Second=()=>{
console.log("Second")
	return(
	<div>
	<h1>This is second component</h1>
	</div>)
}
export default First;
export {Second};
