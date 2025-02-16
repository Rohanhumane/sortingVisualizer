import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "../util/algorithm";
import Button from "../Components/Button";
import classes from "../Components/Button.module.css";
import { forwardRef, useState, useRef, useImperativeHandle } from "react";
import { sorts } from "../App";

interface sortButtons {
  resetArray: () => void;
  array: number[];
  setArray: (arr: number[]) => void;
  setHighlightIndices: (indices: number[]) => void;
  setTime: (time: number) => void;
  setSortName: (name: sorts) => void;
}

const SortButtons = forwardRef((props: sortButtons, ref) => {
  const {
    resetArray,
    array,
    setArray,
    setHighlightIndices,
    setTime,
    setSortName,
  } = props;
  
  const [buttonState, setButtonState] = useState<boolean>(false);
  const isSorting = useRef<boolean>(false);

  // Expose the isSorting state and a setter function to the parent via ref
  useImperativeHandle(ref, () => ({
    setIsSorting(value: boolean) {
      if (isSorting.current) {
        isSorting.current = value;
      }
    },
    setButtonState(value: boolean) {
      setButtonState(value);
    },
  }));

  const handleSort = async (id: sorts) => {
    setSortName(id);
    setButtonState(() => true);
    isSorting.current = true;
    setHighlightIndices([]);
    setTime(0);

    switch (id) {
      case "Selection":
        await selectionSort(
          array,
          setArray,
          isSorting,
          setHighlightIndices,
          setTime
        );
        break;

      case "Bubble":
        await bubbleSort(
          array,
          setArray,
          isSorting,
          setHighlightIndices,
          setTime
        );
        break;

      case "Insertion":
        await insertionSort(
          array,
          setArray,
          isSorting,
          setHighlightIndices,
          setTime
        );
        break;

      case "Merge":
        await mergeSort(
          array,
          setArray,
          isSorting,
          setHighlightIndices,
          setTime
        );
        break;

      case "Quick":
        await quickSort(
          array,
          setArray,
          isSorting,
          setHighlightIndices,
          setTime
        );
        break;

      default:
        break;
    }

    isSorting.current = false;
    setHighlightIndices([]);
  };

  const handleReset = () => {
    isSorting.current = false;
    setButtonState(() => false);
    setSortName(null);
    resetArray();
  };

  return (
    <>
      <Button
        disabled={false}
        onClick={handleReset}
        className={classes["button"]}
      >
        Restart Array
      </Button>

      <Button
        disabled={buttonState}
        onClick={() => handleSort("Selection")}
        className={classes["button"]}
      >
        Selection Sort
      </Button>

      <Button
        disabled={buttonState}
        onClick={() => handleSort("Bubble")}
        className={classes["button"]}
      >
        Bubble Sort
      </Button>

      <Button
        disabled={buttonState}
        onClick={() => handleSort("Insertion")}
        className={classes["button"]}
      >
        Insertion Sort
      </Button>

      <Button
        disabled={buttonState}
        onClick={() => handleSort("Merge")}
        className={classes["button"]}
      >
        Merge Sort
      </Button>

      <Button
        disabled={buttonState}
        onClick={() => handleSort("Quick")}
        className={classes["button"]}
      >
        Quick Sort
      </Button>
    </>
  );
});

export default SortButtons;
