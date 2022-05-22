import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

import {
  RestoreFromTrashOutlined,
  DeleteForeverOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;

function DeleteNote({ note }) {
  const { notes, setNotes, deleteNotes, setDeleteNotes } =
    useContext(DataContext);

  const restoreNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
    setNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <DeleteForeverOutlined
          onClick={() => deleteNote(note)}
          fontSize="small"
          style={{ marginLeft: "auto" }}
        />
        <RestoreFromTrashOutlined
          onClick={() => restoreNote(note)}
          fontSize="small"
        />
      </CardActions>
    </StyledCard>
  );
}

export default DeleteNote;
