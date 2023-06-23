import styled from "styled-components";
import Popup from "reactjs-popup";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 1rem;
  font-weight: bold;
  line-height: 1.125rem;
  font-size: 1.125rem;
  background-color: blue;
  color: orange;
`;
const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
const Button = styled.button`
  border-radius: 1rem;
  border-color: orange;
  cursor: pointer;
`;
const Input = styled.input`
  padding: 1rem;
  height: 2rem;
  border-radius: 1rem;
  font-size: 1rem;
`;
const UpdateButton = styled.button`
  height: 4rem;
  background-color: burlywood;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
`;

const TaskList = ({
  onHandleUpdate,
  onHandleUpdateInputChange,
  trackInput,
  taskArr,
  onHandleRemove
}) => {
  const [textArr, setTextArr] = useState([]);
  //Keeps track of updated values. May discard
  const addToTextArr = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (textArr.includes(trackInput)) {
      console.log("Error! Already Exists");
      return;
    }
    setTextArr((t) => [...t, trackInput]);
    console.log(textArr);
  };

  const trashIcon = "https://www.svgrepo.com/show/511178/trash-full.svg";
  const updateIcon = "https://www.svgrepo.com/show/514192/pencil.svg";

  return (
    <Container>
      {taskArr.map((task, index) => (
        <InnerDiv key={index}>
          <p>{task}</p>
          <IconDiv>
            <Button onClick={() => onHandleRemove(index)}>
              <img
                style={{ width: "1.5rem", height: "1.5rem" }}
                src={trashIcon}
                alt="trashicon"
              />
            </Button>
            <Popup
              trigger={
                <Button>
                  <img
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    src={updateIcon}
                    alt="updateicon"
                  />
                </Button>
              }
              position="left center"
            >
              <div>
                <Input
                  onChange={onHandleUpdateInputChange}
                  value={trackInput}
                  maxLength={100}
                  type="text"
                  placeholder="Update here..."
                />
                <UpdateButton
                  disabled={trackInput === ""}
                  onClick={() => onHandleUpdate(index)}
                  type="submit"
                >
                  Submit
                </UpdateButton>
              </div>
            </Popup>
          </IconDiv>
        </InnerDiv>
      ))}
    </Container>
  );
};

export default TaskList;
