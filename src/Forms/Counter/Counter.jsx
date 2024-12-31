// import React from 'react'

// function Counter() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Counter


import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(propos) {
        super(propos);
        this.state = { 
            counter: 0,
            // date:undefined
        }
    }
    handleClick=()=>{
        this.setState(
            prevState => {
               return {counter: prevState.counter+1}
            }
        )
    }
    handleResete=()=>{
        this.setState(
          
                {counter: 0})
    }
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState(
    //             prevState => {
    //                return {counter: prevState.counter+1}
    //             }
    //         )
    //     },1000)
      
    // }
    render() {
        return (
            <div>
                <br />
                <button onClick={this.handleClick}>click to increment !!</button><br />
                Il ya {this.state.counter} secondes <br />
                <button onClick={this.handleResete}>click to Reset !!</button>
                <br />
                <div>nice   </div>
            </div>
        )
    }
}
