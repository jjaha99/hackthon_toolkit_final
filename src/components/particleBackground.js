import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particleconfig';

export default function particleBackground() {
  return (
    <Particles style={{ position: "absolute" }}
    height="95%" width="95%" params={particlesConfig}></Particles>
  );
}

 