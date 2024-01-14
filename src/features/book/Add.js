import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "./bookSlice";

const AddForm = () => {

    
    let myDispatch = useDispatch();
    const [details, setdetails] = useState({ });
    
    const change = (e) => {
        setdetails({...details,[e.target.name]:e.target.value})
    }

    const save = (e) => {
        e.preventDefault();
        myDispatch(add(details));
    }
    return (<form onSubmit={save} >
        <label>הכנס שם ספר</label>
         <input type="text" name="name"  onChange={change}></input>
        <label>הכנס שם מחבר</label>
        <input type="text" name="aotur"  onChange={change}></input>

        <label>הכנס מחיר</label>
        <input type="text" name="price"  onChange={change}></input>
        <input type="submit"/>
    </form> );
}
 
export default AddForm;