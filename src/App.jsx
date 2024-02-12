
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './List';
import { Readmore } from './Readmore';
import { useState, useEffect } from 'react';
import { MyContext } from './components/MyContext';
import { Comp1 } from './components/Comp1';
import { Comp4 } from './components/Comp4';
import { OtherContex } from './components/OtherContext';
import { Comp2 } from './components/Comp2';
import { Comp3 } from './components/Comp3';
function App() {
  const [count, setCount] = useState(0)
  const [value, setvalue] = useState("Abhishek")
  const [isvisible, setVisible] = useState(true)
  const [isDisable, setDisable] = useState(true)
  const [ text, SetText] = useState("Login")
  //   useEffect(() => {
  //     console.log(count)
  //     // if(count <5){
  //     // console.log("if your are not buy more then 5")
  //     // }
  //     if(count>4){
  //       setDisable(false)
  //     } else{
  //       setDisable(true)
  //     }
  //   console.log("useeffect mout")
  // },[count,value])
 


  return (
    <>
    {/* {isvisible ? <Readmore 
    text ={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
    mexlength={35}
    />:<></>
    } */}
      {/* <List name="Abhishek" age="30" Address="Dhamnod"/>
     <List name="Rohit" age="24" Address="Khalghat"/>
     <List name="rk" age="25" Address="indore"/>
     <List name="av" age="30" Address="Dhamnod"/>
  <List name="abc" age="26" Address="Dhamnod"/> */}
{/* <div>
<p>Count component - {count}</p>
<p>My name is -{value}</p>
      {/* <p> count is {count}</p> */}
      {/* <button onClick={()=> setCount(count+1)}disabled={!isDisable}>increment</button>
      <button onClick={()=> setvalue("React")}>Name</button> 
      <button onClick={()=> setVisible(!isvisible)}>Show/hide</button>

      <button onClick={()=> setCount(count-1)}>decrement</button> */}
{/* </div> */}
      {/* *****************Hook useState************** */}
      {/* <Readmore text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} maxlength={35}/> */}

      {/* <MyContext.Provider value={{ data: "Hi, am shared data" }}>
        <Comp1 />
        <Comp4 />
      </MyContext.Provider> */}
      <OtherContex.Provider value={{ data: "Hi, am Abhi Verma" }}>
        <Comp2 />
        <Comp3 />
      </OtherContex.Provider>
      <MyContext.Provider value={{text,SetText}}>
        <Comp1/>
        <Comp4/>
      </MyContext.Provider>

    </>
  )
}

export default App
