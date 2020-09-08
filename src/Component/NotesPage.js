import React from "react";
import "./notesPage.scss";
import axios from "axios";
import Notee from "./notee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoteEditor from "./NoteEditor";
import NotesGrid from "./NotesGrid";
export default class NotesPage extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    console.log("Fetching notes", localStorage.getItem("token"));
    axios
      .get("http://localhost:3001/note", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then(({ data }) => {
        this.setState({ notes: data });

        console.log("data =>", data);
      });
  }

  deleteN(id) {
    axios
      .delete(`http://localhost:3001/note/${id}`, {
        headers: { authorization: localStorage.getItem("token") },
      })

      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onNoteAdd = (noteText, noteColor) => {
    const notesNew = [
      { id: Date.now(), text: noteText, color: noteColor },
      ...this.state.notes,
    ];

    axios
      .post(
        "http://localhost:3001/note",
        {
          noteText,
          noteColor,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((Response) => {
        this.setState({ notes: notesNew });
      })
      .catch((error) => {
        alert(error.response.data.errors.join(" "));
      });
  };

  onNoteDelete = (note) => {
    console.log("note =>", note);

    axios
      .delete(`http://localhost:3001/note/${note.id}`, {
        headers: { authorization: localStorage.getItem("token") },
      })

      .then((response) => {
        console.log(response.data);
        this.setState(prevState => {
          return {
            notes: prevState.notes.filter(_note => _note.id !== note.id)
          }
        })
      })
      .catch(function (error) {
        console.log(error);
     
      });
  };

  render() {
    return (
      <div>
        <div className="notes-app">
          <NoteEditor onNoteAdd={this.onNoteAdd} />
          <NotesGrid
            notes={this.state.notes}
            onNoteDelete={this.onNoteDelete}
          />
        </div>

        <div>
          <Row>
            {this.state.data &&
              this.state.data.map((val) => (
                <Col xs="4">
                  <Notee {...val} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    );
  }
}
