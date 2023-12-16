"use client";

import Intro from "./Intro";
import Bar from "./Bar";

const Mainpage = () => {
  return (
    <>
      <Intro />
      <br></br>
      <div id="finish">
        <Bar section="已完成故事" />
      </div>
      <br></br>
      <div>
        <Bar section="投票中故事" />
      </div>
      <br></br>
      <div id="unfinish">
        <Bar section="徵稿中故事" />
      </div>
    </>
  );
};
export default Mainpage;
