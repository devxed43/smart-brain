import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="tc f4 pa2 w-70 center"
            type="text"
            placeholder="enter image here..."
          />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            submit
          </button>
        </div>
      </div>
      <p className="f3 tc white">{"face detection by clarifai"}</p>
    </div>
  );
};

export default ImageLinkForm;
