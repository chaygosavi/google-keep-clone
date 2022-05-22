import { styled } from "@mui/material";
import { Box, TextField, ClickAwayListener } from "@mui/material";
import React, { useState, useRef, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuidv4 } from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  min-height: 30px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

function Form() {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuidv4() });
  const { setNotes } = useContext(DataContext);
  const containerRef = useRef();

  const onTextChange = (e) => {
    let changeNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changeNote);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowTextField(false);
        containerRef.current.style.minHeight = "30px";
        setAddNote({ ...note, id: uuidv4() });
        if (addNote.heading != "" || addNote.text != "")
          setNotes((prev) => [...prev, addNote]);
      }}
    >
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={addNote.heading}
          />
        )}

        <TextField
          name="text"
          value={addNote.text}
          onChange={(e) => onTextChange(e)}
          onClick={() => {
            setShowTextField(true);
            containerRef.current.style.minHeight = "70px";
          }}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          placeholder="Take a note.."
          multiline
          maxRows={Infinity}
        />
      </Container>
    </ClickAwayListener>
  );
}

export { Form };
