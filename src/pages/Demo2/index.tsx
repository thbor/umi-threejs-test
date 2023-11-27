import {clearScene, createBase, createCube, } from "@/common/base";
import {useEffect} from "react";
import {OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const animate=(scene, camera,controls,renderer)=> {
  // 使用 requestAnimationFrame 执行动画
  requestAnimationFrame(()=>animate(scene, camera,controls,renderer))
  controls.update()
  renderer.render(scene, camera)
}
const setCameraPosition=(camera)=>{
  camera.position.x = 5;
  camera.position.y = 5;
  camera.position.z = 5;
}
export default function Demo2() {

  useEffect(()=>{
    const {scene,camera,renderer} = createBase()
    const {cube} = createCube()
    scene.add( cube );
    setCameraPosition(camera);
    const controls = new OrbitControls( camera, renderer.domElement );
    animate(scene, camera,controls,renderer)
    return ()=>{
      clearScene(scene,camera,renderer,controls)
    }
  },[])
}