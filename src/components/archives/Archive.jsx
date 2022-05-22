import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

import { UnarchiveOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;

function Archive({ archive }) {
  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const unarchiveNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setDeleteNotes((prev) => [note, ...prev]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <UnarchiveOutlined
          onClick={() => unarchiveNote(archive)}
          fontSize="small"
          style={{ marginLeft: "auto" }}
        />
        <DeleteOutlineOutlined
          onClick={() => deleteNote(archive)}
          fontSize="small"
        />
      </CardActions>
    </StyledCard>
  );
}

export default Archive;
