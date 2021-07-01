import React,{ useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link } from "react-router-dom";

const Home = () => {
    const[fetch, setFetch] = useState({studentList:[]});
    useEffect(()=>{
        const db = firebase.database().ref('student');
        db.on('value',(snapshot)=>{
            let list = [];
            snapshot.forEach(snap => {
                list.push(snap.val());
            });
            setFetch({studentList:list})
        })
    },[])
    console.log(fetch);
    return(
        <>
            <h1 className="text-center">Crud Application</h1>
            <div className="container">
                <Link to="/add">
                    <button className="btn btn-success">Add</button>
                </Link>
            </div>
            <div className="container table-responsive">
                <caption>List of Students</caption>
                <table className="table">   
                    <thead>
                        <tr className="text-primary">
                            <th>Roll No</th>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Total Marks</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                        {
                            fetch.studentList.map((data,i)=>{
                                return(
                                    <tbody>
                                    <tr key={i}>
                                        <th>{data.roll}</th>
                                        <th>{data.fname}</th>
                                        <th>{data.mobile}</th>
                                        <th>{data.total}</th>
                                        <th>
                                            <button className="btn  btn-warning mx-2">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </th>
                                    </tr>
                                    </tbody>
                                )           
                            })
                        }
                    
                </table>
            </div>
        </>
    );
}
export default Home;