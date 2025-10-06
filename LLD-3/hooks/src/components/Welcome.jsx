import React from "react";

class Welcome extends React.Component {

    constructor(){
      super()
      this.state={count:0, showCount:true , text:'scaler'}
    }
  

  render() {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>
          Increment
        </button>

      
      </div>
    );
  }
}

export default Welcome;
