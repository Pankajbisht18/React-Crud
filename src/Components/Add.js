import { Link } from "react-router-dom";
import firebase from "./Firebase";
import { useState } from "react";
const Add = () => {
    const[data, setData] = useState({roll:'',fname:'',mobile:'',total:''});
    const handleData = (evt) => {
        let name = evt.target.name;
        let value = evt.target.value;
        setData({...data,[name]:value});
    } 
    const handleSubmit = () => {
        const db = firebase.database().ref("student/"+data.roll);
        db.set(data)
        setData({roll:'',fname:'',mobile:'',total:''})
    }
    return(
        <>
            <h1 className="text-center">Update Data</h1>
            <div className="container">
                <form>
                    <label className="form-label">Roll No</label>
                    <input 
                        type="text" 
                        name="roll"
                        value={data.roll}
                        className="form-control" 
                        placeholder="Enter Roll Number"
                        onChange={handleData}
                    />
                    <label className="form-label">Name</label>
                    <input 
                        type="text"
                        name="fname"
                        value={data.fname} 
                        className="form-control" 
                        placeholder="Enter Name"
                        onChange={handleData} 
                    />
                    <label className="form-label">Mobile Number</label>
                    <input 
                        type="text"
                        name="mobile"
                        value={data.mobile} 
                        className="form-control" 
                        placeholder="Enter Mobile Number"
                        onChange={handleData}
                    />
                    <label className="form-label">Total Marks</label>
                    <input 
                        type="text" 
                        name="total"
                        value={data.total}
                        className="form-control" 
                        placeholder="Enter Total Marks"
                        onChange={handleData}
                    />
                </form>
            </div>
            <div className="container mt-3">
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                <Link to="/">
                    <button className="btn btn-primary mx-2">Back</button>
                </Link>
            </div>
        </>
    );
}
export default Add;