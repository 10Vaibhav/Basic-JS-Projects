import React, {useState} from "react";

function InputArea({addItem}) {

    const [item, setItem] = useState("");
    function handleChange(event){
      setItem(event.target.value);
    }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={item} />
      <button onClick={()=>{
        addItem(item);
        setItem("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;