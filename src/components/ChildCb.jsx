import { memo } from "react"

function ChildCb(Cb){
    console.log("ChildCb Component",Cb)
    return<>
    </>
}
export default memo(ChildCb)