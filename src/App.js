import AddTask from "./Components.js/AddTask";
import PopupDiv from "./Components.js/PopupDiv";
import TaskList from "./Components.js/TaskList";
import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

const PopupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  //state for displaying inputform
  const [showDiv, setShowDiv] = useState(false);
  // state for tracking user input and rendering list
  const [taskInput, setTaskInput] = useState("");
  const [taskArr, setTaskArr] = useState([
    "Go for a run",
    "Eat healthy food",
    "Watch Porn(Become an EdgeLord)",
    "Fondle virtual girlfriend"
  ]);
  // update form state
  const [trackInput, setTrackInput] = useState("");
  //eventhandler for showDiv
  const onHandleClick = (e) => {
    e.preventDefault();
    setShowDiv(!showDiv);
  };
  //eventhandler for storeing and rendering list

  const addToListHandleClick = (e) => {
    e.preventDefault();
    setTaskArr((t) => [...t, taskInput]);
    console.log(taskArr);
    setTaskInput("");
  };

  //eventhandlers for update and delete
  const onHandleRemove = (index) => {
    setTaskArr((prevTasks) => {
      const updatedTasksArr = [...prevTasks];
      updatedTasksArr.splice(index, 1);
      return updatedTasksArr;
    });
  };
  const onHandleUpdateInputChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setTrackInput(e.target.value);
  };

  const onHandleUpdate = (index) => {
    setTaskArr((prevTasks) => {
      const updatedTaskArr = [...prevTasks];
      updatedTaskArr.splice(index, 1, trackInput);
      return updatedTaskArr;
    });
    setTrackInput("");
  };

  return (
    <div className="App">
      <AddTask handleClick={onHandleClick} />
      <PopupStyle>
        <PopupDiv
          setTaskInput={setTaskInput}
          taskInput={taskInput}
          display={showDiv ? "flex" : "none"}
          addToListHandleClick={addToListHandleClick}
        />
      </PopupStyle>
      <div>
        <TaskList
          onHandleUpdate={onHandleUpdate}
          trackInput={trackInput}
          onHandleUpdateInputChange={onHandleUpdateInputChange}
          onHandleRemove={onHandleRemove}
          taskArr={taskArr}
        />
      </div>
    </div>
  );
}
