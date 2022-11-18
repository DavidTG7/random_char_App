import {
  ResetBoxMain,
  ResetButton,
  ResetButtonsBox,
  ResetConfirmBox,
  ResetText,
} from "./restet.styled";

export const ResetBox = ({ setIsReset, handleReset }) => {
  const handleSi = () => {
    setIsReset(false);
    handleReset();
    console.log("yes");
  };

  const handleNo = () => {
    setIsReset(false);
    console.log("no");
  };

  return (
    <ResetBoxMain>
      <ResetConfirmBox>
        <ResetText>¿Confirmas que deseas hacer RESET?</ResetText>
        <ResetButtonsBox>
          <ResetButton onClick={handleSi}>SI</ResetButton>
          <ResetButton onClick={handleNo}>NO</ResetButton>
        </ResetButtonsBox>
      </ResetConfirmBox>
    </ResetBoxMain>
  );
};
