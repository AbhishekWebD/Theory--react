import { useState } from "react";
export default function useCount(initiailval=0){
    const[count,setCount]= useState(initiailval)
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    return[count,Increment,Decrement]
}