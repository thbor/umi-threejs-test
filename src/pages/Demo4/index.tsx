import {
  createPanolensContainer,
} from "@/common/base";
import {useEffect} from "react";
import * as PANOLENS from 'panolens'

// 立方体全景
const createCubeImg=()=>{
  return new PANOLENS.CubePanorama([
    require('../../assets/home-left.png'),  // 左面
    require('../../assets/home-right.png'),  // 右面
    require('../../assets/home-top.png'),  // 上面
    require('../../assets/home-bottom.png'),  // 底面
    require('../../assets/home-front.png'),  // 正面
    require('../../assets/home-back.png')   // 背面  因为相机是在立方体内部望向z轴的负方向，所以实际先看到这个面
  ])
}
export default function Demo4() {

  useEffect(()=>{
    const panorama = createCubeImg()
    const viewer = createPanolensContainer(document.querySelector('#container-demo4'))
    viewer.add(panorama);
  },[])
  return (
      <div id="container-demo4" style={{width:window.innerWidth,height:window.innerHeight}}/>
  )
}