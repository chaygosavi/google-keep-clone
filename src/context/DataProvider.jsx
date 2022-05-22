import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        setArchiveNotes,
        setDeleteNotes,
        deleteNotes,
        archiveNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
