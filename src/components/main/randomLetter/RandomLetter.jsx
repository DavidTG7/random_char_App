import { useState, useEffect } from "react";
import { ResetBox } from "../../reset/ResetBox";
import {
  NewRandomLetterButton,
  PickedLettersBox,
  RandomLetterBox,
  RandomLetterText,
  ResetButton,
  SinglePickedLetter,
} from "./randomLetter.styled";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const control = {};
CHARS.split("").forEach((char) => {
  control[char] = 0;
});

const randomLetterGenerator = () => {
  const availableChars = Object.keys(control).filter(
    (key) => control[key] === 0
  );

  const randomIndex = Math.floor(Math.random() * availableChars.length);
  control[availableChars[randomIndex]] = 1;
  console.log(availableChars[randomIndex], availableChars);

  return availableChars[randomIndex];
};

export const RandomLetter = () => {
  const [pickedChars, setPickedChars] = useState([]);
  const [newRandomChar, setNewRandomChar] = useState("...");

  useEffect(() => {}, [pickedChars]);

  const allPickedRandomChars = pickedChars.map((letter) => {
    return <SinglePickedLetter key={letter}>{letter}</SinglePickedLetter>;
  });

  const handleNewChar = () => {
    if (pickedChars.length === 24) {
      alert("No hay mas letras!");
      return;
    }
    const newChar = randomLetterGenerator();
    console.count(newChar);
    setNewRandomChar(newChar);
    if (newRandomChar === "...") {
      return;
    }
    setPickedChars([...pickedChars, newRandomChar]);
  };

  const handleReset = () => {
    setPickedChars([]);
    setNewRandomChar("...");
    CHARS.split("").forEach((char) => {
      control[char] = 0;
    });
  };

  return (
    <>
      <RandomLetterBox>
        <ResetBox />
        <RandomLetterText>{newRandomChar}</RandomLetterText>
        <NewRandomLetterButton onClick={handleNewChar}>
          Nueva Letra
        </NewRandomLetterButton>
        <ResetButton onClick={handleReset}>RESET</ResetButton>
        <h2>HISTORIAL</h2>
        {allPickedRandomChars.length ? (
          <>
            <PickedLettersBox>{allPickedRandomChars}</PickedLettersBox>
          </>
        ) : (
          <p>Aun no hay historial!</p>
        )}
      </RandomLetterBox>
    </>
  );
};
