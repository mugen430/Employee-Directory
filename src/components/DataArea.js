import React from "react";
import "../styles/style.css"
function DataArea(props) {
    return (

        <div className="card">
            <div className= "col">
            <div className= "name"><img alt={props.last} src={props.image}></img></div>
            <div className= "name">{props.title} {props.first} {props.last} </div>
            <div className= "name">{props.gender}</div>
            <div className= "name">{props.age}</div>
            <div className= "name">{props.phone}</div>
            <div className= "name">{props.email}</div>
            </div>
        </div>
    );
}

export default DataArea;