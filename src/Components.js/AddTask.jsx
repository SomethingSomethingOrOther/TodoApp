import styled from "styled-components";
import Draggable from "react-draggable";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  background-color: orange;
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
const Text = styled.div`
  font-weight: bold;
  font-family: Gotham, sans-serif;
  line-height: 1.125rem;
  color: blue;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AddTask = ({ handleClick }) => {
  //plus icon
  const icon = "https://www.svgrepo.com/show/510136/plus.svg";
  return (
    <Container>
      <Text>Add Task</Text>

      <button
        style={{
          width: "5rem",
          backgroundColor: "blue",
          border: "none",
          borderRadius: "3rem"
        }}
        onClick={handleClick}
      >
        <Image src={icon} alt="add task" />
      </button>
    </Container>
  );
};

export default AddTask;
