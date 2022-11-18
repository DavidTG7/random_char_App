import styled from "styled-components";

export const RandomLetterBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem;
`;

export const PickedLettersBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SinglePickedLetter = styled.p`
  width: 5.5rem;
  height: 5.5rem;
  margin: 1rem;
  border-radius: 50%;
  background: hsla(199, 100%, 29%, 1);
  color: white;
  display: grid;
  place-items: center;
  font-size: 3.5rem;
  transition: 0.5s;

  animation-name: example;
  animation-duration: 1s;

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RandomLetterText = styled.p`
  width: 15rem;
  height: 15rem;
  border: solid 7px hsla(188, 100%, 10%, 1);
  background: hsla(102, 100%, 10%, 1);
  color: hsla(102, 100%, 66%, 1);
  border-radius: 20px;
  font-size: 13rem;
  font-weight: 600;
  display: grid;
  place-items: center;
`;

export const NewRandomLetterButton = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  font-size: 1.8rem;
  font-weight: 600;
  background: hsla(135, 100%, 15%, 1);
  border: none;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  justify-items: center;
  box-shadow: 0px 0px 20px hsla(135, 100%, 10%, 1);

  &:active {
    background: hsla(135, 100%, 25%, 1);
    box-shadow: 0px 0px 10px hsla(135, 100%, 10%, 1);
    transform: scale(0.95);
  }
`;

export const ResetButton = styled.button`
  border: none;
  width: 8rem;
  height: 4rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  background: hsla(334, 100%, 35%, 1);
  color: white;
`;
