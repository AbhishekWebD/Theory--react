import React,{useState, useEffect} from "react";
export function Readmore(Props){
    useEffect(()=>{
        console.log("unmounts")
    })

    const [hidden, sethidden ] = useState(true)
const {text,maxlength }= Props
return<span> 
    {hidden ? `${text.substr(0,maxlength).trim()}...`:text}
    {hidden ?(<a onClick={()=> sethidden(false)}>Readmore</a>):
    (<a onClick={()=>sethidden(true)}>Readless</a>)}
</span>
}