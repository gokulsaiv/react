import React from "react";
import './styles.css';
export default function Pagination({handlePreviousPageClick,handleNextPageClick}){
   
    return(
        <>
        <button className="previous" onClick={handlePreviousPageClick}> previous</button>
        <button className="next" onClick={handleNextPageClick}>Next </button>
        </>
    )
}