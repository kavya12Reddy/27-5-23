import React from "react";
import Prop from "./Prop";

class App extends React.Component{
    state={
        subject:"reactjs",
        year:"2023"
    }
    render(){
        return(
         <div>
            <p> This is a class Component for App</p>
            <h1> this is head tag </h1>
            <p> {this.state.subject} {this.state.year} </p>
            <Prop name="kavya" age="20"/>  
            <Prop name="siri" age="20"/>  
        </div>
        )
    }
}
export default App