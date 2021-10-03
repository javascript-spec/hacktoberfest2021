import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import MouseParticles from "react-mouse-particles";
import ParticlesBg from "particles-bg";

export default function App() {
  
  return (
    <>
    <ToDo/>
  <MouseParticles
  g={1}
  color="random"
  cull="MuiSvgIcon-root,MuiButton-root"
  level={6}/>
  <ParticlesBg type="random" bg={true}/>
  </>
  );
}
