import React from "react";

class ApiComponent extends React.Component {
    constructor(){
        super();

        this.state = {
            isLoading: false,
            data: {}
        };
    }

    componentDidMount(){
        this.setState({isLoading: true});
        fetch("https://swapi.co/api/people/5")
        .then(resp => resp.json())
        .then(resData => {
            this.setState({
                isLoading: false,
                data: resData
            })
        });
    }

    render(){
        return (
            <div>
                <p>{this.state.isLoading ? "Loading..." : this.state.data.name}</p>
            </div>
        )
    }
}

export default ApiComponent;