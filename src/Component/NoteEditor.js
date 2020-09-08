import React from "react";
import "./notesPage.scss";



class NoteEditor extends React.Component {
    state = { text: "", color: "" ,  items: [],
    errorMessage: ''};
  
    handleChangeText = (e) => {
      this.setState({ text: e.target.value });
   
    };
  
    handleChangeColor = (e) => {
      this.setState({ color: e.target.value });
    };
  
    render() {
      const { color, text } = this.state;
      return (
        <div className="NoteEditor">
          <textarea
            className="NoteEditor__text-input"
            placeholder="Enter your note here..."
            onChange={this.handleChangeText}
          >
            {text}
          </textarea>
          <input
            className="NoteEditor__color-picker jscolor"
            value={color}
            placeholder="Enter your color here..."
            onChange={this.handleChangeColor}
          />
          <button
            className="NoteEditor__add-button"
            type="button"
            onClick={() => {
                alert.show('Oh look, an alert!')
              }}
         
            
            onClick={() => {
                
              this.props.onNoteAdd(text, color);
            }}
          >
            Add
          </button>
        </div>
      );
    }
  }


  export default NoteEditor;