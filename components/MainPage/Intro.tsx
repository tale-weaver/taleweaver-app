import * as React from "react";
import Image from "next/image";

const Intro = ({}) => {
  return (
    <div className="pt-24">
      <Image
        src="/image/welcome.jpg"
        alt="Welcome"
        layout="response"
        width={3000}
        height={400}
      />
      <br></br>
      <div style={containerStyle}>
        <Image
          style={childStyle}
          src="/image/creator.jpg"
          alt="Creator"
          width={280}
          height={400}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("unfinish")?.offsetTop,
              behavior: "smooth",
            })
          }
        />
        <Image
          style={childStyle}
          src="/image/reader.jpg"
          alt="Reader"
          width={280}
          height={400}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("finish")?.offsetTop,
              behavior: "smooth",
            })
          }
        />
        <Image
          style={childStyle}
          src="/image/more.jpg"
          alt="More"
          width={280}
          height={400}
          onClick={() => (window.location.href = "./about-us")}
        />
      </div>
    </div>
  );
};

export default Intro;

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  height: "auto",
};

const childStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "30%",
  padding: "0 auto",
  cursor: "pointer",
};
