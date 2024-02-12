import { useContext } from "react";
import { MyContext } from "./MyContext";
export function Comp4() {
    // const context = useContext(MyContext)
    const {text, SetText} = useContext(MyContext)
    console.log(MyContext)
    return <div>
        <h1>{text}</h1>
        {/* <button onClick={()=>SetText('Logout')}>Logout</button> */}
    </div>
    // return <div> {context.data} </div>
}