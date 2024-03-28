import React from 'react'
import styled from "styled-components"
import gear from "../../img/images/gear.png"


const LoadingWrapper =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #221D3D;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid red; */
    width: 40%;
    height: 40%;
`

const Gear1Wrapper =styled.div`
    position: absolute;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    /* border: 2px solid red; */
    width: 23%;
    height: 30%;
    bottom: 61%;

    @media screen and (max-width: 1200px) and (min-width: 768px)  {
        width: 33%;
        height: 40%;
        bottom: 51%;
    }

    @media screen and (max-width: 768px)  {
        width: 33%;
        height: 40%;
        bottom: 51%;
    }
`
const Gear1 =styled.img`
    filter: invert(83%) sepia(100%) saturate(1173%) hue-rotate(0deg) brightness(113%) contrast(102%);
    width: 70%;

    animation: rotate1 5s infinite linear ;

    @keyframes rotate1{
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
    }
    
`
const Gear2Wrapper =styled.div`
        position: absolute;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    /* border: 2px solid red; */
    width: 20%;
    height: 20%;
    right: 52%;
    bottom: 52%;

    @media screen and (max-width: 1200px) and (min-width: 768px)  {
        width: 23%;
        height: 30%;
        bottom: 48%;
    }

    @media screen and (max-width: 768px)  {
        width: 23%;
        height: 30%;
        bottom: 48%;
    }
`

const Gear2 =styled.img`
    filter: invert(83%) sepia(100%) saturate(1173%) hue-rotate(0deg) brightness(113%) contrast(102%);
    width: 40%;

    animation: rotate2 5s infinite linear ;

    @keyframes rotate2{
    from{ transform: rotate(360deg); }
    to{ transform: rotate(-360deg); }
    }
`

const Gear3Wrapper =styled.div`
   position: absolute;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    /* border: 2px solid red; */
    width: 20%;
    height: 20%;
    right: 44%;
    bottom: 40%;

    @media screen and (max-width: 1200px) and (min-width: 768px)  {
        width: 32%;
        left: 33%;
        bottom: 47%;
    }

    @media screen and (max-width: 768px)  {
        width: 33%;
        right: 35%;
        height: 30%;
        bottom: 45%;
    }

`

const Gear3 =styled.img`
    filter: invert(83%) sepia(100%) saturate(1173%) hue-rotate(0deg) brightness(113%) contrast(102%);
    /* background-color: yellow; */
    /* filter: hue-rotate(60deg); */
    width: 45%;
    animation: rotate 5s infinite linear ;

    @keyframes rotate{
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
}
`

const MEAmain =styled.div`
    display:flex;
    justify-content:center; 
    position:absolute;
    width: 80vw;
    bottom: 25%;
    /* left: 0%; */

    /* @media screen and (max-width: 1200px) and (min-width: 768px)  {
        left: 23%;
        bottom: 47%;
    } */

    @media screen and (max-width: 768px)  {
        
        bottom: 40%;
        left: 0%;
    }



`
const MEA =styled.div`
position: absolute;
    /* color: yellow; */
    font-size: 40px;
    font-weight: bolder;
    bottom: 30%;

    text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 35px;
    
    @media screen and (max-width: 1200px) and (min-width: 768px)  {
        left: 23%;
        bottom: 47%;
    }

    @media screen and (max-width: 768px)  {
        bottom: 30%;
        width: 82vw;
        font-size: 20px;
        left: 20%
    }


    @keyframes textclip {
    to {
        background-position: 200% center;
    }
  }
`

const Loading = () => {
  return (
    <>
    <LoadingWrapper>
        <Wrapper>
            <Gear1Wrapper>
                <Gear1 src={gear}></Gear1>
            </Gear1Wrapper>
            <Gear2Wrapper>
            <Gear2 src={gear} ></Gear2>
            </Gear2Wrapper>
            <Gear3Wrapper>
            <Gear3 src={gear}></Gear3>
            </Gear3Wrapper>
            <MEAmain>
                <MEA>
                    Welcome to Mechancal Engineering Department
                </MEA>
            </MEAmain>
        </Wrapper>
    </LoadingWrapper>
      
    </>
  )
}

export default Loading
