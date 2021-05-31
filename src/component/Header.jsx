import React, { useState } from "react";
import data from "../data";
export default function Header() {
  const inital = false;
  const [addClass, setAddClass] = useState(inital);

  const toggle = () => {
    setAddClass({
      addClass: !setAddClass,
    });
    console.log("clicked");
  };
  return (
    <div className="container">
      {data.map((box) => {
        console.log(box);
        return (
          <>
            <div
              onClick={toggle}
              key={box.id}
              className={addClass ? "box box2" : "box"}
            >
              <h1>box{box.id}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
}
