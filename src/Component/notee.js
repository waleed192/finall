import React from "react";

import "./notee.scss";
class Notee extends React.Component {
  render() {
    const { text, color } = this.props;
    console.log(this.props);
    return (
      <article className="note_box" style={{ backgroundColor: `${color}` }}>
        {text}
        <button
          className="Note__delete-button"
          type="button"
          onClick={this.onNoteDelete}
        >
          x    
        </button>
       
        <pic p={this.pic} />


  
        </article>
    );
  }
}

export default Notee;
