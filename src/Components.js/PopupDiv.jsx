import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: ${(props) => props.display};
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  border: none;
  padding: 1rem;
  width: 100%;
  margin-top: 5rem;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const PopupDiv = ({
  display,
  addToListHandleClick,
  taskInput,
  setTaskInput
}) => {
  return (
    <Container display={display}>
      <form>
        <input
          style={{ padding: "0.5rem" }}
          maxLength={100}
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          value={taskInput}
          placeholder="Do! There is no try..."
        />
        <Button
          disabled={taskInput === ""}
          onClick={addToListHandleClick}
          type="submit"
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default PopupDiv;
