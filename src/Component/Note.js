import React from "react";
import "./notesPage.scss";

class Note extends React.Component {
 
 
 
 


    render() {
      const { color, children} = this.props;
      const style = {
        backgroundColor: color,
      };
      return (
        <article className="Note" style={style}>
          {children}
  
          <button
            className="Note__delete-button"
            type="button"
            onClick={this.props.onDelete}
          >
            x 
          </button>
          <div>
          <button onClick={this.edit}>Edit</button>
      </div>
          <pic p={this.pic} />
        </article>
      );
    }
  }
  
  export default Note;