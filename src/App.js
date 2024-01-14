import logo from './logo.svg';
import './App.css';
import List from './features/book/List.js';
import { useSelector } from 'react-redux'; 
import EditForm from './features/book/Edit.js';
import Details from './features/book/Details.js';
import AddForm from './features/book/Add.js';

function App() {
  let selectForShow=useSelector(st=>st.book.selectedForShow)
let selectForEdit=useSelector(st=>st.book.selectedForEdit)

  return (
    <div >
      <List />
      <AddForm/>
      {selectForShow && <Details  />}
      {selectForEdit && <EditForm />}
    </div>
  );
}

export default App;
