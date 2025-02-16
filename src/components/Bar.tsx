import { useEffect, useState } from "react";
import classes from "./Bar.module.css";

interface BarProps {
  array: number[];
  highlightIndices: number[];
}

const Bar: React.FC<BarProps> = ({ array, highlightIndices }) => {
  const [width, setWidth] = useState(
    Math.min(40, Math.ceil(window.innerWidth / array.length) - 5)
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(40, Math.ceil(window.innerWidth / array.length) - 9));
    };

    window.addEventListener("resize", handleResize);
    setWidth(Math.min(40, Math.ceil(window.innerWidth / array.length) - 9));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [array.length]);

  return (
    <>
      <div className={classes["bars-container"]}>
        {array.map((value: number, idx: number) => {
          let color = "#3E7B27";
          if (highlightIndices.includes(idx)) {
            color = "#EFE3C2";
          }
          return (
            <div
              key={idx}
              className={classes["bar"]}
              style={{
                height: `${value}px`,
                width: `${width}px`,
                backgroundColor: color,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Bar;
