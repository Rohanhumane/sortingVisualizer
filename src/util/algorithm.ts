export const selectionSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  isSorting: React.MutableRefObject<boolean>,
  setHighlightIndices: (indices: number[]) => void,
  setTime: (time: number) => void
) => {
  let counter = 0;

  // ✅ Start a timer outside the loop
  const interval = setInterval(() => {
    counter += 1;
    setTime(counter);
  }, 1000);

  for (let i = 0; i < array.length - 1; i++) {
    if (!isSorting.current) {
      clearInterval(interval); // ❌ Stop timer if sorting is interrupted
      return;
    }

    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (!isSorting.current) {
        clearInterval(interval);
        return;
      }

      if (array[j] < array[min]) {
        setHighlightIndices([min, j]); // Highlight comparisons
        min = j;
      }
    }

    // Swap elements
    [array[min], array[i]] = [array[i], array[min]];
    setArray([...array]);

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  clearInterval(interval); // ✅ Stop timer when sorting completes
};

export const bubbleSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  isSorting: React.MutableRefObject<boolean>,
  setHighlightIndices: (indices: number[]) => void,
  setTime: (time: number) => void
) => {
  let counter = 0;

  // ✅ Start a timer outside the loop
  const interval = setInterval(() => {
    counter += 1;
    setTime(counter);
  }, 1000);

  const arr: number[] = [...array];
  for (let i = 0; i < arr.length; i++) {
    if (!isSorting.current) {
      clearInterval(interval); // ✅ Stop timer when sorting completes
      return;
    }

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (!isSorting.current) {
        clearInterval(interval); // ✅ Stop timer when sorting completes
        return;
      }

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setHighlightIndices([j + 1, j]); // Highlight comparison
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for animation
      }
    }
  }

  clearInterval(interval); // ✅ Stop timer when sorting completes
};

export const insertionSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  isSorting: React.MutableRefObject<boolean>,
  setHighlightIndices: (indices: number[]) => void,
  setTime: (time: number) => void
) => {
  let counter = 0;

  // ✅ Start a timer outside the loop
  const interval = setInterval(() => {
    counter += 1;
    setTime(counter);
  }, 1000);

  for (let i = 0; i < array.length; i++) {
    if (!isSorting.current) {
      clearInterval(interval); // ✅ Stop timer when sorting completes
      return;
    }
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      if (!isSorting.current) {
        clearInterval(interval); // ✅ Stop timer when sorting completes
        return;
      }

      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      setHighlightIndices([j - 1, j]); // Highlight comparison
      j -= 1;
    }
    setArray([...array]);

    await new Promise((response) => setTimeout(response, 100));
  }

  clearInterval(interval); // ✅ Stop timer when sorting completes
};

export const mergeSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  isSorting: React.MutableRefObject<boolean>,
  setHighlightIndices: (indices: number[]) => void,
  setTime: (time: number) => void
) => {
  let counter = 0;
  let interval = null; // Declare interval

  // ✅ Start a single timer before sorting begins
  interval = setInterval(() => {
    counter += 1;
    setTime(counter);
  }, 1000);

  const merge = async (
    arr: number[],
    low: number,
    mid: number,
    high: number
  ) => {
    if (!isSorting.current) {
      if (interval) clearInterval(interval); // ✅ Stop timer when sorting is interrupted
      return;
    }

    const newArray: number[] = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
      setHighlightIndices([left, right]); // Highlight comparison
      if (arr[left] > arr[right]) {
        newArray.push(arr[right]);
        right++;
      } else {
        newArray.push(arr[left]);
        left++;
      }
    }

    while (left <= mid) {
      newArray.push(arr[left]);
      left++;
    }

    while (right <= high) {
      newArray.push(arr[right]);
      right++;
    }

    // Copy sorted elements back to the original array
    for (let i = low; i <= high; i++) {
      array[i] = newArray[i - low];
    }

    setArray([...array]);
    await new Promise((resolve) => setTimeout(resolve, 100));
  };

  const mS = async (arr: number[], low: number, high: number) => {
    if (!isSorting.current) {
      if (interval) clearInterval(interval); // ✅ Stop timer when sorting is interrupted
      return;
    }

    if (low >= high) return;

    const mid = Math.floor((low + high) / 2);

    // ✅ using `await` to wait for each recursive step
    await mS(arr, low, mid);
    await mS(arr, mid + 1, high);
    await merge(arr, low, mid, high);
  };

  await mS(array, 0, array.length - 1);

  // ✅ Stop timer after sorting completes
  if (interval) clearInterval(interval);
};

export const quickSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  isSorting: React.MutableRefObject<boolean>,
  setHighlightIndices: (indices: number[]) => void,
  setTime: (time: number) => void
) => {
  let counter = 0;
  let interval = null;

  // ✅ Start a timer outside the loop
  interval = setInterval(() => {
    counter += 1;
    setTime(counter);
  }, 1000);

  const pivotFind = async (arr: number[], low: number, high: number) => {
    if (!isSorting.current) {
      clearInterval(interval); // ✅ Stop timer when sorting completes
      return -1;
    }

    const pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
      if (!isSorting.current) {
        clearInterval(interval); // ✅ Stop timer when sorting completes
        return -1;
      }

      while (i < high && arr[i] <= pivot) {
        if (!isSorting.current) {
          clearInterval(interval); // ✅ Stop timer when sorting completes
          return -1;
        }
        i += 1;
      }

      while (j > low && arr[j] > pivot) {
        if (!isSorting.current) {
          clearInterval(interval); // ✅ Stop timer when sorting completes
          return -1;
        }
        j -= 1;
      }

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setHighlightIndices([i, j]); // Highlight comparison
      }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    setHighlightIndices([low, j]); // Highlight comparison
    setArray([...array]);

    return j; // Return partition index
  };

  const qS = async (arr: number[], low: number, high: number) => {
    // ✅ using `await` to wait for each recursive step
    if (!isSorting.current) {
      clearInterval(interval); // ✅ Stop timer when sorting completes
      return;
    }

    if (low < high) {
      const pivot = await pivotFind(arr, low, high);
      if (pivot === -1) {
        clearInterval(interval); // ✅ Stop timer when sorting completes
        return;
      }
      await qS(arr, low, pivot - 1);
      await qS(arr, pivot + 1, high);
    }

    await new Promise((response) => setTimeout(response, 50));
  };
  await qS(array, 0, array.length - 1);

  // ✅ Stop timer after sorting completes
  if (interval) clearInterval(interval);
};
