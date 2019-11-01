import React from "react";

class ClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Hello, I am the class component!</h1>
            </div>
        )
    }
}

export default ClassComponent;