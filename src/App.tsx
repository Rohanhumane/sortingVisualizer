import { useCallback, useEffect, useRef, useState } from "react";
import Bar from "./Components/Bar";
import SortButtons from "./Components/SortButtons";
import "./App.css";

const ARRAY_SIZE = 5;

export type sorts =
  | "Selection"
  | "Insertion"
  | "Bubble"
  | "Merge"
  | "Quick"
  | null;

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState<number>(ARRAY_SIZE);
  const [highlightIndices, setHighlightIndices] = useState<number[]>([]);
  const [time, setTime] = useState<number>(0);
  const [sortName, setSortName] = useState<sorts>(null);

  // Create a ref to control isSorting in SortButtons
  const isSorting = useRef<{
    setIsSorting: (value: boolean) => void;
    setButtonState: (value: boolean) => void;
  }>({
    setIsSorting: () => {},
    setButtonState: () => {},
  });

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = useCallback(() => {
    setArray(() => {
      const newArray = Array.from({ length: arraySize }, () =>
        Math.floor(Math.random() * 500 + 1)
      );
      return [...newArray];
    });
  }, [arraySize]);

  const handleRestart = () => {
    setTime(0);
    resetArray();
  };

  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(0);

    if (isSorting.current) {
      isSorting.current.setIsSorting(false);
      isSorting.current.setButtonState(false);
    }
    
    setSortName(null);
    setArraySize(() => +e.target.value);
  };

  return (
    <>
      <h1>Sorting Visualizer</h1>
      <div className={"visualizer-container"}>
        <Bar array={array} highlightIndices={highlightIndices} />

        {sortName && <h2>{sortName} Sort</h2>}

        <div className={"box-container"}>
          <SortButtons
            resetArray={handleRestart}
            array={array}
            setArray={setArray}
            setHighlightIndices={setHighlightIndices}
            setTime={setTime}
            ref={isSorting}
            setSortName={setSortName}
          ></SortButtons>
        </div>

        <div className="slider-input">
          <input
            type="range"
            min="2"
            max="100"
            value={arraySize}
            onChange={handleSlide}
          />
          <span>Array Size: {arraySize}</span>
        </div>

        <div className="timer">
          Time Count <span style={{ color: "#ff5733" }}>{time}</span> sec
        </div>
      </div>
    </>
  );
}

export default App;
