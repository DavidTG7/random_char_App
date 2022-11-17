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

export const SinglePickedLetter = styled.p`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border-radius: 50%;
  border: 2px solid blue;
  display: grid;
  place-items: center;
  font-size: 3.5rem;
  transition: 0.5s;

  animation-name: example;
  animation-duration: 1s;

  @keyframes example {
    /* from {
      background-color: red;
    }
    to {
      background-color: yellow;
    } */
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
  border: solid 3px black;
  border-radius: 20px;
  font-size: 11rem;
  font-weight: 600;
  display: grid;
  place-items: center;
  animation-name: example1;
  animation-duration: 1s;

  @keyframes example1 {
    /* from {
      background-color: red;
    }
    to {
      background-color: yellow;
    } */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NewRandomLetterButton = styled.button`
  width: 10rem;
  height: 10rem;
  border: solid 3px black;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  justify-items: center;
`;
