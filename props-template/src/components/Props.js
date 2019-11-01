import React from "react";

class Props extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mainText: this.props.mainText
        };
    }

    render(){
        return (
        <div className="container" >
          <h1 className="lead test-h1">{this.state.mainText}</h1>
        </div>
      )
     }
};

export default Props;