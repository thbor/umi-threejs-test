import { Link, Outlet } from "umi";
import styles from "./index.less";
export default function Layout() {
  return (
    <div className={styles.navs}>
      {/*<ul>*/}
      {/*<li>*/}
      {/*  <Link to="/">Home</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/demo5">车模型（gltf）</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/demo6">人物动画</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/demo1">demo1-旋转的正方体</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/demo2">demo2-拖拽移动的正方体</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/demo3">球体全景Panolens</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/demo4">立方体全景Panolens</Link>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*<BoxinGame/>*/}
      {/*<DemoEmpty />*/}
      {/*<Link to="/verticalEllipse">竖版多余省略</Link>*/}
      {/*<div />*/}
      <Link to="/showMoreOverOneLine">多行展开更多</Link>
      <Outlet />
    </div>
  );
}
