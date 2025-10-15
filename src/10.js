
function Task10() {
    const items = ["ssuuraa", "halaa", "noorr", "raya"];
  const listStyle = {   backgroundColor: "blue", fontSize: "20px", margin: "10px" };

    return (
<ul>
        {items.map((items,index)=>(
    <li key={index} style={listStyle}>{items}</li>  
    ) )}
    </ul> 
    );
}
    export default Task10;

