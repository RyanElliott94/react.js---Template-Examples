import React from "react";

class EventComponent extends React.Component {
    constructor(props){
        super(props);
        this.testClickMethod = this.testClickMethod.bind(this);
    }

    testClickMethod(){
        console.log("Text Clicked!")
    }

    render(){
        return (
            <div>
                <h1 onClick={this.testClickMethod}>Test Component 2</h1>
            </div>
        )
    }
}
export default EventComponent;