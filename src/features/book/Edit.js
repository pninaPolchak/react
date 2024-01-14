import { useDispatch, useSelector } from "react-redux";
import { saveEditedObject } from "./bookSlice";
import { useState } from "react";

const EditForm = () => {

    let forEdit = useSelector(st => st.book.selectedForEdit);
    let myDispatch = useDispatch();
    const [details, setdetails] = useState({ ...forEdit });
    
    const change = (e) => {
        setdetails({...details,[e.target.name]:e.target.value})
    }

    const save = (e) => {
        e.preventDefault();
        myDispatch(saveEditedObject(details));
    }
    return (<form onSubmit={save} >
        <label>ערוך שם ספר</label>
         <input type="text" name="name" value={details.name} onChange={change}></input>
        <label>ערוך שם מחבר</label>
        <input type="text" name="aotur" value={details.aotur} onChange={change}></input>

        <label>ערוך מחיר</label>
        <input type="text" name="price" value={details.price} onChange={change}></input>
        <input type="submit"/>
    </form> );
}
 
export default EditForm;