import React, { Component } from "react";
import firebase from './Firebase';
import App from './App';

class Add extends Component{
    state = ({roll:'',name:'',marks:'',vbl:true})
    
    handleChange = (evt) => {
        console.log(this.state);
        let name = evt.target.name;
        let value = evt.target.value;
        this.setState({[name]:value});
    }
    goBack = () => {
        console.log("clicked Back");
        this.setState({vbl:false})
    }
    submitData = () => {
        const db = firebase.database().ref(`student/${this.state.roll}`);
        const data = {Roll:this.state.roll, Name:this.state.name, Marks:this.state.marks};
        db.set(data);
        this.setState({roll:'',name:'',marks:''});
    }
    render() {
        let output = null;
        if(this.state.vbl === true) {
            output = (
                <div className="container mt-4">
                    <h1 className="text-center">Student Form</h1>
                    <label className="fw-bold">Roll Number:</label>
                    <input type="text" name='roll' className="form-control" placeholder="Enter your Roll Number" value={this.state.roll} onChange={this.handleChange} />
                    <label className="fw-bold mt-2">Name:</label>
                    <input type="text" name='name' className="form-control" placeholder="Enter your Name" value={this.state.name} onChange={this.handleChange} />
                    <label className="fw-bold mt-2">Marks:</label>
                    <input type="text" name='marks' className="form-control" placeholder="Enter your Marks" value={this.state.marks} onChange={this.handleChange} />
                    <input type="button" value="Submit" className="btn btn-success mt-2" onClick={this.submitData} />
                    <input type="button" value="Back" className="btn btn-secondary ms-2 mt-2" onClick={this.goBack} />
                </div>
            )
        }
        else {
            output = (
                <App />
            )
        }
        return (
            <>
                {output}
            </>
        )
    }
}
export default Add;
