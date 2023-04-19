import { useState } from "react";
function Todo() {
  const [value, setvalue] = useState("");
  const [arr, setArr] = useState([]);

  const onAddEvent = (event) => {
    event.preventDefault();
    if (arr !== "") {
      setArr([...arr, { id: arr.length + 1, text: value }]);
    }
    setvalue("");
  };

  const deleteClick = (id) => {
    const removeItem = arr.filter((value) => {
      return value.id !== id;
    });

    setArr(removeItem);
  };
  const onUpdate = (text) => {
    <input value={text}></input>
  };
  const onChangeEvent = (event) => {
    setvalue(event.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={onAddEvent}>
          <h1>MY TODO LIST</h1>
          <input value={value} onChange={onChangeEvent}></input>
        </form>
      </div>
      <div>
        {arr.map((a) => (
          <li key={a.id}>
            {a.text}
            <button onClick={() => deleteClick(a.id)}>Delete</button>
            <button onClick={() => onUpdate(a.text)}>Update</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;