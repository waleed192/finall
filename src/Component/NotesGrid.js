import React from "react";
import Masonry from "react-responsive-masonry";
import Note from "./Note"
import "./notesPage.scss";

class NotesGrid extends React.Component {
    render() {
      const { notes, onNoteDelete } = this.props;
      return (
        <div className="notes-grid" ref="grid">
          <Masonry columnsCount={3}>
            {notes.map((note) => (
              <Note
                key={note.id}
                color={note.color}
                onDelete={() => onNoteDelete(note)}
              >
                {note.text}
              </Note>
            ))}
          </Masonry>
       
        </div>
      );
    }
  }
  export default NotesGrid;