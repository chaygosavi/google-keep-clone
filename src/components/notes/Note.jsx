import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

import { ArchiveOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;

function Note({ note }) {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prev) => [note, ...prev]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlined
          onClick={() => archiveNote(note)}
          fontSize="small"
          style={{ marginLeft: "auto" }}
        />
        <DeleteOutlineOutlined
          onClick={() => deleteNote(note)}
          fontSize="small"
        />
      </CardActions>
    </StyledCard>
  );
}

export default Note;
