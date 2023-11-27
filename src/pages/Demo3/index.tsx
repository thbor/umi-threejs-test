import {
  createPanolensContainer,
} from "@/common/base";
import {useEffect} from "react";
import * as PANOLENS from 'panolens'

const createPanolensImg=(imgPath)=>{
  return new PANOLENS.ImagePanorama(imgPath);
}
export default function Demo3() {

  useEffect(()=>{
    const imgPath = 'https://pchen66.github.io/panolens.js/examples/asset/textures/equirectangular/view.jpg'
    // const imgPath = require('../../assets/home-front.png')
    const panorama = createPanolensImg(imgPath)
    const viewer = createPanolensContainer(document.querySelector('#container-demo3'))
    viewer.add(panorama);
  },[])
  return (
      <div id="container-demo3" style={{width:window.innerWidth,height:window.innerHeight}}/>
  )
}