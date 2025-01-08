import { useState } from "react";
import { Application, Input, StyledButton } from "./styled";
import { useRef } from "react";
const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <Application onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        className="form__input"
        placeholder="co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <StyledButton onClick={inputFocus}>Dodaj nowe zadanie</StyledButton>
    </Application>
  );
};

export default Form;
