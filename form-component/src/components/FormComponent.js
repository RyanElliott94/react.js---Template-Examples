import React from "react";

class FormComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            testInputVal: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <input type="text" name="testInputVal" placeholder="Test Input" onChange={this.handleChange}></input>
            </form>
        )
    }
}

export default FormComponent