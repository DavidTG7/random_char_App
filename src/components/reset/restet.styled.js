import styled from "styled-components";

export const ResetBoxMain = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  background: hsla(100, 100%, 1%, 0.5);
`;
export const ResetConfirmBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 20rem;
  background: hsla(219, 100%, 57%, 1);
  border-radius: 10px;

  @media screen and (min-width: 1000px) {
    width: 50%;
  }
`;

export const ResetText = styled.p`
  color: white;
  font-size: 3rem;
  background: transparent;
  margin: 0 3rem;
  text-align: center;
  font-weight: 600;
`;

export const ResetButtonsBox = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const ResetButton = styled.button`
  width: 25%;
  height: 5rem;
  font-size: 2rem;
  font-weight: 600;
  background: hsla(334, 100%, 35%, 1);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
