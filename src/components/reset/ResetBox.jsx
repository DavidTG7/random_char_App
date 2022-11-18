import {
  ResetBoxMain,
  ResetButton,
  ResetButtonsBox,
  ResetConfirmBox,
  ResetText,
} from "./restet.styled";

export const ResetBox = (handleSi, handleNo) => {
  return (
    <ResetBoxMain>
      <ResetConfirmBox>
        <ResetText>¿Confirmas que deseas hacer RESET?</ResetText>
        <ResetButtonsBox>
          <ResetButton onClick={handleSi}>SI</ResetButton>
          <ResetButton onclick={handleNo}>NO</ResetButton>
        </ResetButtonsBox>
      </ResetConfirmBox>
    </ResetBoxMain>
  );
};
