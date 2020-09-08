import React from "react";
import axios from "axios";

class setprofile extends React.Component {
 

  render() {
    const { profileImg } = this.props;
    return (
      <div className="page">
        <div className="container">
          <h3 className="heading">Add your Image</h3>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.props.setImage}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons"></i>
              Choose your Photo
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default setprofile;
