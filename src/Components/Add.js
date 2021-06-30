import { Link } from "react-router-dom";
const Add = () => {
    return(
        <>
            <h1 className="text-center">Update Data</h1>
            <div className="container">
                <form>
                    <label className="form-label">Roll No</label>
                    <input type="text" className="form-control" placeholder="Enter Roll Number"/>
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                    <label className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number"/>
                    <label className="form-label">Total Marks</label>
                    <input type="text" className="form-control" placeholder="Enter Total Marks"/>
                </form>
            </div>
            <div className="container mt-3">
                <button className="btn btn-success">Submit</button>
                <Link to="/">
                    <button className="btn btn-primary mx-2">Back</button>
                </Link>
            </div>
        </>
    );
}
export default Add;