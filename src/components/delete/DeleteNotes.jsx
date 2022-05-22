import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function DeleteNotes() {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        <Grid container style={{ marginTop: 16 }}>
          {deleteNotes?.map((note) => (
            <Grid item key={note.id}>
              <DeleteNote note={note} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export { DeleteNotes };
