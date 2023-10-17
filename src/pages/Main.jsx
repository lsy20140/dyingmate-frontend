import React, {useEffect, useState} from 'react'
import MainExperience from '../components/MainExperience';
import { usePlay } from '../contexts/Play';
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import MapOverlay from '../components/MapOverlay';
import SettingModal from '../components/SetUp/SettingModal';
import { Overlay } from './Overlay';
import {ReactComponent as SettingIcon} from '../assets/icons/setting_icon.svg'
import {ReactComponent as MapModalButton} from '../assets/img/map_modal_btn.svg'
import styled from 'styled-components';
import axios from 'axios'
import { useAuthContext } from '../contexts/AuthContext';

export default function Main() {
  const [showSetup, setShowSetup] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const {play, end} = usePlay();
  const {token} = useAuthContext()

  useEffect(() => {
    axios.get(`https://dying-mate-server.link/map`, {
      headers: {Authorization: 'Bearer ' + token},
    }, )
    .then(function (res) {
      console.log(res)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  return (
  <>
    <Header onClick={() => setShowSetup(!showSetup)}>
      <SettingIcon/>
    </Header>

    <Canvas>
      <color attach="background" arg={["#f59f9f"]} />
      <ScrollControls
        pages={play && !end ? 100 : 0}
        damping={1}
      >
      <MainExperience />
      </ScrollControls>
    </Canvas>

    <Overlay/>
    <MapButtonWrapper>
      <MapModalButton />
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
  z-index: 999;
`

const MapButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`