//文字3行省略，但是展开需要查询最多15行

import { useState } from "react";

const ShowMoreOverOneLine = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="text-[16px]">
      {/*demo1345679*/}
      {/*<div className="m-[10px] border border-solid w-[300px] line-clamp-3">*/}
      {/*  <div className="float-right text-blue-600">展开</div>*/}
      {/*  <div>*/}
      {/*    自香港投行跳槽回内地投资公司发展的投资人徐斯（龚俊*/}
      {/*    饰），结识了国牌服装集团董事长独生女江湖（钟楚曦*/}
      {/*    饰），二人因商业理念不同而互不对盘。江湖父亲的企业突然破产，江湖一夜之间由云端跌落谷底。而一直颇有事业野心的徐斯对江湖父亲曾经一手打造的胶底鞋品牌“腾岳”势在必得，使得落魄的江湖决定不惜一切保住“腾岳”。经一番周旋较量，最终徐斯与江湖立下是否能够复兴“腾岳”的存亡生死契*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*demo2*/}
      {/*<div className="m-[10px] border border-solid w-[300px] text-show-more line-clamp-3">*/}
      {/*  <div className="float-right text-blue-600">展开</div>*/}
      {/*  <div>*/}
      {/*    自香港投行跳槽回内地投资公司发展的投资人徐斯（龚俊*/}
      {/*    饰），结识了国牌服装集团董事长独生女江湖（钟楚曦*/}
      {/*    饰），二人因商业理念不同而互不对盘。江湖父亲的企业突然破产，江湖一夜之间由云端跌落谷底。而一直颇有事业野心的徐斯对江湖父亲曾经一手打造的胶底鞋品牌“腾岳”势在必得，使得落魄的江湖决定不惜一切保住“腾岳”。经一番周旋较量，最终徐斯与江湖立下是否能够复兴“腾岳”的存亡生死契*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*demo3*/}
      {/*<div className="m-[10px] border border-solid w-[300px] line-clamp-3">*/}
      {/*  <div className="wei" />*/}
      {/*  <div className="float-right text-blue-600 clear-both">展开</div>*/}
      {/*  <div>*/}
      {/*    自香港投行跳槽回内地投资公司发展的投资人徐斯（龚俊*/}
      {/*    饰），结识了国牌服装集团董事长独生女江湖（钟楚曦*/}
      {/*    饰），二人因商业理念不同而互不对盘。江湖父亲的企业突然破产，江湖一夜之间由云端跌落谷底。而一直颇有事业野心的徐斯对江湖父亲曾经一手打造的胶底鞋品牌“腾岳”势在必得，使得落魄的江湖决定不惜一切保住“腾岳”。经一番周旋较量，最终徐斯与江湖立下是否能够复兴“腾岳”的存亡生死契*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*demo4*/}
      {/*<div*/}
      {/*  className={classNames(*/}
      {/*    "m-[10px] border border-solid w-[300px]",*/}
      {/*    !collapse ? "line-clamp-3 text-show-more" : "relative"*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <div*/}
      {/*    className={classNames(*/}
      {/*      "text-blue-600",*/}
      {/*      collapse*/}
      {/*        ? "absolute right-[14px] bottom-[0]"*/}
      {/*        : "float-right clear-both"*/}
      {/*    )}*/}
      {/*    onClick={() => setCollapse(!collapse)}*/}
      {/*  >*/}
      {/*    {collapse ? "收起" : "展开"}*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    自香港投行跳槽回内地投资公司发展的投资人徐斯（龚俊*/}
      {/*    饰），结识了国牌服装集团董事长独生女江湖（钟楚曦*/}
      {/*    饰），二人因商业理念不同而互不对盘。江湖父亲的企业突然破产，江湖一夜之间由云端跌落谷底。而一直颇有事业野心的徐斯对江湖父亲曾经一手打造的胶底鞋品牌“腾岳”势在必得，使得落魄的江湖决定不惜一切保住“腾岳”。经一番周旋较量，最终徐斯与江湖立下是否能够复兴“腾岳”的存亡生死契*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*demo5*/}
      <div className="m-[10px] border border-solid max-w-[300px] flex">
        <input type="checkbox" id="exp" className="hidden" />
        <div className="text">
          <label className="text-blue-600 btn" for="exp" />
          自香港投行跳槽回内地投资公司发展的投资人徐斯（龚俊
          饰），结识了国牌服装集团董事长独生女江湖（钟楚曦
          饰），二人因商业理念不同而互不对盘。江湖父亲的企业突然破产，江湖一夜之间由云端跌落谷底。而一直颇有事业野心的徐斯对江湖父亲曾经一手打造的胶底鞋品牌“腾岳”势在必得，使得落魄的江湖决定不惜一切保住“腾岳”。经一番周旋较量，最终徐斯与江湖立下是否能够复兴“腾岳”的存亡生死契
        </div>
      </div>
    </div>
  );
};
export default ShowMoreOverOneLine;
