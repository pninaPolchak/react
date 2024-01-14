import {  useSelector } from "react-redux";

const Details = () => {
    const book = useSelector(st => st.book.selectedForShow)
    return (<>
        <h2>price:{book.price}</h2>
        <h3>autor:{book.aotur}</h3>
    </>);
}
export default Details;