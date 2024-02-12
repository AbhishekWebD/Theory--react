import { useContext } from "react";
import { OtherContex } from "./OtherContext";
export function Comp2() {
    const context = useContext(OtherContex)
    return <div> {context.data} </div>
}