import React from "react";
import './styles.css';
export default function Pagination(props){
    function handleNextState(){
        props.nextToken()
    }
    function hanglePreviousState(){
        props.prevToken()
    }
    return(
        <>
        <button className="previous" onClick={hanglePreviousState}> previous</button>
        <button className="next" onClick={handleNextState}>Next </button>
        </>
    )
}