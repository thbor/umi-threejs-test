import * as THREE from 'three'
import * as PANOLENS from 'panolens'

export const createBase=()=>{
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  return {scene,camera,renderer,}
}
export const createCube=()=>{
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
  const cube = new THREE.Mesh( geometry, material );
  return {cube}
}


export const clearScene=(scene,camera,renderer,controls?:any)=>{
  if (scene) {
    scene.traverse(function (v) {
      if (v.type === 'Mesh') {
        v.geometry.dispose()
        v.material.dispose()
      }
    })
    while (scene.children.length > 0) {
      scene.remove(scene.children[0])
    }
    renderer.dispose()
    renderer.forceContextLoss()
    document.body.removeChild(renderer.domElement)
    renderer = null
    scene.clear()
    scene = null
    camera = null
    if(controls){
      controls = null
    }
  }
}


export const createPanolensContainer=(container)=>{
  return new PANOLENS.Viewer({
    container, // 传入父容器dom
    controlButtons: ['fullscreen', 'setting', 'video'],
    autoRotate: true, //自动播放
    autoRotateActivationDuration: 2000, //时长
    autoRotateSpeed: 0.3 ,//速度
    output: 'console'  // 为了后面打印位置信息
  })
}
