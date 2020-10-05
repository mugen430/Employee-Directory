import React, { Component } from "react";
import './../styles/style.css'
import DataBod from './DataBod';

class Navbar extends Component {

    state = {
        Search: "",
        filteredEmployees: []
    };


    componentDidMount() {
        if (this.state.filteredEmployees.length < 1) {
            this.setState({
                filteredEmployees: this.props.employees
            })
        }
    }


    handleInputChange = event => {
        this.setState({
            Search: event.target.value
        });
        let userTyped = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });


        this.setState({
            filteredEmployees: filteredList

        });
    }


    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.Search}
                        name="Search"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search"
                    />
                </form>
                <br></br>
                {this.state.filteredEmployees.length > 0 &&
                    <DataBod empList={this.state.filteredEmployees} />
                }
                <br></br>
            </div>

        );
    }
}


export default Navbar;