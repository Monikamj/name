import React, { useState } from "react";


const App =() =>{
    const[inputList, setInputList]=useState("buy apple");
    const [items, setItems] = useState([]);
    const itemEvents =(event) => {
    setInputList(event.target.value);
};

const listOfItems = () =>{

}

return(
<>
<div className="main_div">
<div className="center_div">
<br />
<h1>ToDo List</h1>
<br />
<input type="text" placeholder="Add a Items" onChange={itemEvents}/>
<button onClick={listOfItems}> + </button>

<ol>
    {/* <li>{inputList}</li> */}
    {Items.map((itemval) =>{
        return <li>{itemval} </li>
    })}

</ol>
</div>
</div>
</>
);
};

export default App;