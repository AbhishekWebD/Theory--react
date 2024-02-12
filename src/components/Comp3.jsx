import { useContext } from "react";
import { OtherContex } from "./OtherContext";
export function Comp3() {
    const context = useContext(OtherContex)
    return <div> {context.data} </div>
}