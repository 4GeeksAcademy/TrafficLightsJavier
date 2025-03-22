import React,{useState} from "react";

export const TrafficLights = () =>{

	const [selected, setSelected] = useState("red")



	return(
		<div className="traffic-lights">
			<div 
				onClick={()=> setSelected("red")}
				className={"light red" + ((selected === "red") ? " glow" : "")}>
			</div>
			<div 
				onClick={()=> setSelected("orange")}
				className={"light orange" + ((selected === "orange") ? " glow" : "")}>
			
			</div>
			<div
				onClick={()=> setSelected("green")} 
				className={"light green" + ((selected === "green") ? " glow" : "")}>

			</div>

		</div>
	)
}


