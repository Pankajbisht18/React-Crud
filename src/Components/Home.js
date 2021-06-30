import { Link } from "react-router-dom";
const Home = () => {
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
                    <tbody>
                        <tr>
                            <th>1001</th>
                            <th>Pankaj</th>
                            <th>9650657728</th>
                            <th>400</th>
                            <th>
                                <button className="btn  btn-warning mx-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <th>1002</th>
                            <th>Rahul</th>
                            <th>7982182326</th>
                            <th>420</th>
                            <th>
                                <button className="btn  btn-warning mx-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <th>1003</th>
                            <th>Ankit</th>
                            <th>9650657728</th>
                            <th>350</th>
                            <th>
                                <button className="btn  btn-warning mx-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <th>1004</th>
                            <th>Rohit</th>
                            <th>7982182326</th>
                            <th>400</th>
                            <th>
                                <button className="btn  btn-warning mx-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Home;