import React from "react";

class StateSet extends React.Component {
    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "Elliott",
            age: 25
        }

    }

    componentDidMount(){
        // If I want to change an existing state value
        this.setState(prevState => {
            return {
                firstName: prevState.firstName + "Ryan"
            }
        });

        // Otherwise just use this
        this.setState({firstName: "Ryan"});
    }

    render(){
        console.log(this.state);
        return (
            <h3>Hello my name is {this.state.firstName}  {this.state.lastName} and I am {this.state.age} years old!</h3>
        )
    }
}

export default StateSet;