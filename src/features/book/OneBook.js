import { useDispatch } from "react-redux";
import { deletee, selectForEdit, selectForShow } from './bookSlice'


const Book = ({ one }) => {
    let myDispatch = useDispatch();
    return (<>
        <h1>{one.name}</h1>
        <input type="button" value='הצג' onClick={()=>myDispatch(selectForShow(one))}/>
        <input type="button" value='ערוך' onClick={()=>myDispatch(selectForEdit(one))}/>
        <input type="button" value="מחק" onClick={()=>myDispatch(deletee(one.id))}/>
    </>);
}

    export default Book;