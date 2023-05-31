import React from "react";

class Prop extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p>This is about Props example</p>
                <p>name is {this.props.name} age is{this.props.age}</p>
            </div>
        )  
    }
}
export default Prop