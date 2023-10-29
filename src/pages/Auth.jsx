import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from '../contexts/AuthContext';
import styled from 'styled-components';

export default function Auth() {
  const code = new URL(window.location.href).searchParams.get("code");
  const baseUrl = 'https://dying-mate-server.link'

  const {user, setUser, token, setToken, setLogin} = useAuthContext()
  const [accessTokenFetching, setAccessTokenFetching] = useState(false)

  const getUserInfo = async () => {
    if(accessTokenFetching) return;

    console.log("getAccessToken 호출")

    try{
      setAccessTokenFetching(true)
      const res = await axios.post(
        `${baseUrl}/user/kakao?code=${code}`, {}, {
          withCredentials: true,
      })
      setToken(res.data.data.accessToken)
      setUser(res.data.data)
      console.log("res.data.data.accessToken",res.data.data.accessToken)
      console.log("res.data.data",res.data.data)
      setAccessTokenFetching(false)
      setLogin(true)
      navigate("/onboarding",{state: {isSocialLogin: true}} )
    }catch(error){
      console.log(error)
      setAccessTokenFetching(false) 
    }
  };



  useEffect(() => {
    if(code && !token) {
      getUserInfo()
    }
  },[code, user])


  return (
    <>
      <Loading>
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </Loading>

    </>
  )
}

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  svg {
    width: 4rem;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
  }
  
  circle {
    fill: none;
    stroke: var(--main-color);
    stroke-width: 3;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate4 {
    100% {
    transform: rotate(360deg);
    }
  }
  
  @keyframes dash4 {
    0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    }
  
    50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
    }
  
    100% {
    stroke-dashoffset: -125px;
    }
  }
 
`