import React, { Component } from "react";
import DataArea from './DataArea';
import './../styles/style.css'

class DataBod extends Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    sortAge = () => {
        let sortEmp = [];
        if (this.state.ascending) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.dob.age, nameB = b.dob.age;
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.dob.age, nameB = b.dob.age;
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            ascending: !this.state.ascending,
            sortedEmployees: sortEmp

        })
    }

    render() {
        return (

            <div>
                <tbody className="col">
                    <div className= "name photo">Photo</div>
                    <div className= "name Name" onClick={this.sortName} 
                    >Name </div>
                    <div className= "name gender">Gender</div>
                    <div className= "name"
                        onClick={this.sortAge}>Age
                    </div>
                    <div className= "name">Phone</div>
                    <div className= "name mail">E-mail</div>
                </tbody>

                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (

                            <DataArea
                                image={item.picture.large}
                                first={item.name.first}
                                last={item.name.last}
                                gender={item.gender}
                                age={item.dob.age}
                                phone={item.cell}
                                email={item.email}
                            />
                    ))
                }
            </div>
        );
    }
}

export default DataBod;