import React, {useState} from 'react'
import MainExperience from '../components/MainExperience';
import { usePlay } from '../contexts/Play';
import { Canvas } from "@react-three/fiber";
import { ScrollControls, OrbitControls } from "@react-three/drei";
import MapOverlay from '../components/MapOverlay';
import SettingModal from '../components/SetUp/SettingModal';
import { Overlay } from './Overlay';
import {ReactComponent as SettingIcon} from '../assets/icons/setting_icon.svg'
import {ReactComponent as MapModalButton} from '../assets/img/map_modal_btn.svg'
import styled from 'styled-components';


export default function Main() {
  const [showSetup, setShowSetup] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const {play, end} = usePlay();

  return (
  <>
    <Header onClick={() => setShowSetup(!showSetup)}>
      <SettingIcon/>
    </Header>

    <Canvas>
      <axesHelper args={[1000, 1000, 1000]} />
      <color attach="background" arg={["#f59f9f"]} />
      <ScrollControls
        pages={play && !end ? 300 : 0}
        damping={1}
      >
        <MainExperience />
      </ScrollControls>
    </Canvas>
    <Overlay/>
    <MapButtonWrapper>
      <MapModalButton onClick={() => setShowMap(true)}/>
    </MapButtonWrapper>
    <MapOverlay showMap={showMap} setShowMap={setShowMap} />
    <SettingModal showSetup={showSetup} setShowSetup={setShowSetup} />
  </>
  );
}

const Header = styled.div`
  position: absolute;
  top: 3.75rem;
  right: 3rem;
  z-index: 1;
`

const MapButtonWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`