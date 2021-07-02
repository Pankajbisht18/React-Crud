import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import firebase from "./Firebase";

const Update = () => {
    const {id} = useParams();
    const[stu, setStu] = useState();
    useEffect(()=>{
        const db = firebase.database().ref('student');
        db.get.child(id).('value',(snapshot)=>{
            let list = [];
            snapshot.forEach(snap => {
                list.push(snap.val());
            });
            console.log(list)
        })
    },[])
    return(
        <>
            <h1 className="text-center">Update Data</h1>
            <div className="container">
                <form>
                    <label className="form-label">Roll No</label>
                    <input 
                        type="text" 
                        name="roll"
                        value="roll"
                        className="form-control" 
                        placeholder="Enter Roll Number"
                    />
                    <label className="form-label">Name</label>
                    <input 
                        type="text"
                        name="fname"
                        value="fname" 
                        className="form-control" 
                        placeholder="Enter Name"

                    />
                    <label className="form-label">Mobile Number</label>
                    <input 
                        type="text"
                        name="mobile"
                        value="mobile" 
                        className="form-control" 
                        placeholder="Enter Mobile Number"
                    />
                    <label className="form-label">Total Marks</label>
                    <input 
                        type="text" 
                        name="total"
                        value="total"
                        className="form-control" 
                        placeholder="Enter Total Marks"
                    />
                </form>
            </div>
            <div className="container mt-3">
                <button 
                    className="btn btn-success" 
                >
                    Update
                </button>

                <Link to="/">
                    <button className="btn btn-primary mx-2">Back</button>
                </Link>
            </div>
        </>
    );
}
export default Update;