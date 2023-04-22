import { useState } from "react";
function Todo() {
  const [value, setvalue] = useState("");
  const [value2, setvalue2] = useState("");

  const [arr, setArr] = useState([]);
  const [flag2, setFlag] = useState(false);
  const onAddEvent = (event) => {
    event.preventDefault();
    if (arr !== "") {
      setArr([...arr, { id: arr.length + 1, text: value, flag: false }]);
    }
    setvalue("");
  };

  const deleteClick = (id) => {
    // 입력받은 것의 id를 받아온다
    // value의id가 같지않은것만 removeItem에 넣어줌
    // arr을 removeItem으로 set
    // 발류가먼데-> 내부 원소들 여기서는 arr

    const removeItem = 
    arr.filter((value) => {
      return value.id !== id;
    });

    setArr(removeItem);
  };

  const onUpdate = (array) => {
    //id를받아옴
    //누른것만 true false해서 만들어보기
    //그러면 값에 flag추가해서 하는게 편할듯-> ing..
    //id같은거만 flag를 변경시키고싶음
    //flag2는 상태변화감지시키기위해 추가한것

    //여기서 newArr=arr.map{} 한후 setArr(newArr)하면 오류가 난다 공부+수정필요
    //왠지 아직 모름..
    //map은 새로운 배열반환하는게 아니었나?
    //console log 해보니 뭔가이상함
    //key 겹칠떄가있다 해결필요+


    arr.map((value) => {
      if (value.id === array.id) array.flag = true;
    });
    
    if (!flag2) setFlag(true);
    if (flag2) setFlag(false);
    
  };

  const onEdit = (array) => {
    arr.map((value) => {
      if (value.id === array.id) {
        array.flag = false;
        value.text = value2;
      }
    });
    if (!flag2) setFlag(true);
    if (flag2) setFlag(false);
  };

  const onChangeEvent = (event) => {
    setvalue(event.target.value);
  };

  const onChangeT = (event) => {
    setvalue2(event.target.value);
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
            {!a.flag ? (
              <span>{a.text} </span>
            ) : (
              <input placeholder={a.text} onChange={onChangeT}></input>
            )}
            <button className="buttonStyle" onClick={() => deleteClick(a.id)}>Delete</button>
            {!a.flag ? (
              <button onClick={() => onUpdate(a)}>Edit</button>
            ) : (
              <button onClick={() => onEdit(a)}>Update</button>
            )}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
