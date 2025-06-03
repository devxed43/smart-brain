import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import "./App.css";

const App = () => {
  return (
    <div>
      <ParticlesBg
        num={100}
        type="cobweb"
        color="#fad0c4,"
        bg={true}
        style={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

      {/* <SignOut /> */}
      {/* 
      
      <FaceRecognition />  */}
    </div>
  );
};

export default App;
