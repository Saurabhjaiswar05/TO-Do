import React, { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('white'); 
  const [data, setData] = useState('');
  const [come, setCome] = useState([]);

  const handleColor = (color)=>{
    setBgColor(color);
  }

  const changeHandler = (e) => {
    setData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCome([data, ...come]);
    setData('');
  };

  const deleteHandler = (indexToRemove) => {
    const updatedTasks = [...come]; 
    updatedTasks.splice(indexToRemove, 1); 
    setCome(updatedTasks); 
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen "style={{background:bgColor}}>
        {
          bgColor === "black" ? (
            <i className="far fa-sun mr-10 text-white" onClick={()=>handleColor("white")}></i>
          ) : (
            <i className="fas fa-moon mr-10" onClick={()=>handleColor("black")} ></i>
          )
        }
      

      

        <div className="border overflow-y-auto bg-gray-500 outline-none border-gray-500 w-[450px] rounded-xl h-[500px] p-10">
          <h1 className="text-center text-white font-bold text-lg">To Do List</h1>

          <form className="p-5 ml-8" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter your task"
              value={data}
              onChange={changeHandler}
              required
              className='outline-none rounded p-2'
            />
            <button className="bg-black rounded-full text-white py-2 px-4 ml-4">Add</button>
          </form>

          <div className="p-5  ">
            {come.length > 0 ? (
              come.map((task, index) => (
                <div key={index} className='flex justify-around my-3'>
                  <h1 className="text-white text-lg">{task}</h1>
                  <button
                    className="bg-black text-white py-1 px-3 rounded-full"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-white">No tasks yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
