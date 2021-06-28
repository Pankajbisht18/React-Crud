import React, { Component } from 'react';
import firebase from './Firebase';
import Add from './Add';

class App extends Component {
  state = {data:[], vbl:false}  
  //Add Record
  addRecord = () => {
    this.setState({vbl:true})
  }
  //Delete Record
  deleteData = (n) => {
    if(window.confirm("Are you sure to delete this record"))
      firebase.database().ref(`student/${n}`).remove()
  }
  //Update Record
  dataUpdate = (n) => {
    const db = firebase.database().ref(`studetn/${n}`);
    this.setState({vbl:true})
  }
  //display data
  componentDidMount() {
    const db = firebase.database().ref("student");
    db.on('value',(Snapshot) => {
      let studentList = [];
      Snapshot.forEach(snap => {
        studentList.push(snap.val());
      });
      this.setState({data:studentList});
    });
  }
  render() {
    let output = null;
    if(this.state.vbl===false) {  
      output = (
        <div className="container mt-3">
          <h1 className="text-center">Crud Application</h1>
          <input 
            type="button" 
            value="Add Record" 
            className="btn btn-secondary"
            onClick={this.addRecord}
          />
          <table className="table table-bordered table-responsive mt-3">
            <thead>
              <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((col,i)=>{
                return(
                  <tr key={i}>
                    <td>{col.Roll}</td>
                    <td>{col.Name}</td>
                    <td>{col.Marks}</td>
                    <td>
                      <input 
                        type="button" 
                        value="Edit" 
                        className="btn btn-primary"
                        onClick={()=>this.dataUpdate(col.Roll)} 
                      />
                      <input 
                        type="button" 
                        value="Delete" 
                        className="btn btn-danger ms-3"
                        onClick={()=>this.deleteData(col.Roll)} 
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
    else if(this.state.vbl===true) {
      output = (
        <Add />
      )
    }  
    return(
      <>
        {output}
      </>
    )
  }
}
export default App;