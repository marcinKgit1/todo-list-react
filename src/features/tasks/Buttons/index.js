import { ButtonsWrapper, WrapperButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsWrapper>
    {tasks.length > 0 && (
      <>
        <WrapperButtons onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </WrapperButtons>
        <WrapperButtons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </WrapperButtons>
      </>
    )}
  </ButtonsWrapper>
);

export default Buttons;
