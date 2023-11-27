import { clearScene, createBase, createCube } from "@/common/base";
import { useEffect } from "react";

const render = (scene, camera, renderer, cube) => {
  requestAnimationFrame(() => render(scene, camera, renderer, cube));
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
};
export default function Demo1() {
  useEffect(() => {
    const { scene, camera, renderer } = createBase();
    console.log(111, scene, camera, renderer);
    const { cube } = createCube();
    scene.add(cube);
    camera.position.z = 5;
    render(scene, camera, renderer, cube);
    return () => {
      clearScene(scene, camera, renderer);
    };
  }, []);
}
