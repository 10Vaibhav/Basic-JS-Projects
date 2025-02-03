import React, {useState} from "react";
import "../public/styles.css"
import DisplayTodoList from "./DisplayTodoComponent";
import InputArea from "./InputArea"

function App() {

  const [list, setList] = useState([]);


  function addItem(item){
    setList([...list, item])
  }

  function deleteItem(id){
    setList(prevItems => {
      return prevItems.filter(
        (item, index)=>{
          return index !== id;
        }
      )
    })
  }

  const Items = list.map((item, index) => <DisplayTodoList key={index} id={index} content={item} onChecked = {deleteItem}/>)

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea addItem={addItem}/>

      <div>
        <ul>
          {Items}
        </ul>
      </div>

    </div>
  );
}

export default App;
