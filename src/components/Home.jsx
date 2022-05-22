import { Box } from "@mui/material";
import { Archives } from "./archives/Archives";
import { DeleteNotes } from "./delete/DeleteNotes";
import { Notes } from "./notes/Notes";
import SwipeDrawer from "./SwipeDrawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" exact element={<Notes />} />
          <Route path="/delete" exact element={<DeleteNotes />} />
          <Route path="/archive" exact element={<Archives />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default Home;
