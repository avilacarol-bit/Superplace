import styled from "styled-components";

export const Card = styled.div`
  background-color: rgba(204, 204, 204);
  border-radius: 1em;
  padding: 0.5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
  p {
    font-weight: 700;
  }
  input {
    border: none;
    border-radius: 0.5em;
    padding: 0.5em;
    width: 5em;
  }
`;
export const ButtonRemove = styled.button`
  background-color: rgba(212, 90, 90, 0.98);
  font-weight: 600;
  color: white;
  padding: 0.8em;
  width: 7em;
  height: 2.5em;
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  :hover {
    background-color: rgb(233, 35, 21);
    transition: 0.5s;
    padding: 0.8em;
    width: 7.5em;
    height: 3em;
  }
`;
