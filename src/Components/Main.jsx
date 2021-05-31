import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';


const Main = () => {
  const [inputData, setinputData] = useState("");
  const [items, setitems] = useState([]);

  const addItems = () => {
    if (!inputData) {

    }
    else {
      setitems([...items, inputData]);
      setinputData("")
    }
    ;
  }
  const deleteitem = (id) => {
    const newitem = items.filter((v, Idn) => {
      return Idn !== id
    })
    setitems(newitem);
  }
  const remove = () => {
    setitems([]);
  }
  return (
    <>
      <div>
        <div className="main-div">
          <h1 className="header">Todo aap</h1>
          <div className="inpt">
            <input className="inpt" type="text" placeholder="enter items to add" value={inputData} onChange={(e) => setinputData(e.target.value)}></input>
              <Button className="btn"  onClick={addItems}> <span className="btn">< AddBoxIcon/></span></Button>
           
          </div>
          <div className="data" >
            {items.map((v, Idn) => {
              return (
                <div key={Idn} className="but">
                  <ol>
                    <li>{v}
                    <Button   onClick={() => deleteitem(Idn)}> <span className="btn"><RemoveCircleIcon/></span></Button>
                    </li>
                   
                  </ol>
                </div> )})}
                <Button onClick={remove} ><span className="btn"><DeleteIcon/></span></Button>
          </div>
        </div>
      </div>


    </>
  );
}
export default Main;
