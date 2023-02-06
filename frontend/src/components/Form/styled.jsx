import styled from "styled-components";

export const FormMain = styled.form`
  background-color: #2f7e69;
  width: 70vw;
  margin: 2em auto;
  padding: 2em;
  border-radius: 1em;
`;
export const DivName = styled.div`
  h1 {
    color: #fff;
  }
`;
export const DivInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

export const ContainerClient = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1em;
  align-items: center;
  width: 72vw;
  margin-left: 2.3em;
`;
export const LabelClient = styled.label`
  color: #fefefe;
  font-weight: 600;
`;
export const InputClient = styled.input`
  border: 1px solid rgba(204, 204, 204);
  border-radius: 0.5em;
  width: 30em;
  height: 2em;
`;
export const DivLabelInput = styled.div`
  display: flex;
  gap: 0.4em;
  align-items: center;
`;
export const Label = styled.label`
  color: #fefefe;
`;
export const Input = styled.input`
  border: 1px solid rgba(204, 204, 204);
  border-radius: 0.5em;
  width: 20em;
  height: 2em;
`;
export const InputQty = styled.input`
  border: 1px solid rgba(204, 204, 204);
  border-radius: 0.5em;
  width: 4em;
  height: 2em;
`;

export const PriceProduct = styled.p`
  color: #fefefe;
  font-weight: 600;
`;

export const NoStock = styled.p`
  color: #fefefe;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: rgba(130, 171, 128, 0.9803921568627451);
  font-weight: 600;
  color: white;
  padding: 0.5em;
  border: none;
  border-radius: 0.3em;
  width: 14em;
  height: 2.2em;
  cursor: pointer;
  :hover {
    background-color: rgba(96, 184, 102, 0.5490196078431373);
    transition: 0.7s;
    width: 15em;
    height: 2.4em;
  }
`;
