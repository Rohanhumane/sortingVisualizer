# Sorting Algorithm Visualizer

## Overview
This project is a **Sorting Algorithm Visualizer** built with **React and TypeScript**. It provides an interactive way to understand how different sorting algorithms work by animating the sorting process. This tool helps in learning and analyzing the performance of various sorting techniques.

## Features
- **Multiple Sorting Algorithms**: Supports Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort.
- **Interactive UI**: Users can visualize sorting in real time with animations.
- **Dynamic Resizing**: The bars adjust dynamically based on screen size.
- **Highlighting Active Elements**: Highlights the elements being compared or swapped during sorting to enhance clarity.
- **Performance Tracking**: Displays the execution time of each sorting algorithm.
- **User Control**: Users can restart the array to generate a new dataset for sorting.

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For type safety and improved development experience.
- **CSS Modules**: For styling components and ensuring modular CSS.

## File Structure
- **Bar.tsx**: Handles rendering of bars representing array elements and updates their color dynamically based on sorting activity.
- **Button.tsx**: A reusable button component used for user interactions.
- **SortButtons.tsx**: Contains buttons to trigger different sorting algorithms and manage UI state.
- **algorithm.ts**: Implements various sorting algorithms and integrates animation logic.
- **App.tsx**: The main component that integrates all parts and manages the global state.

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/sorting-visualizer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd sorting-visualizer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Click on the sorting buttons to visualize the sorting process.
- Click **Restart Array** to generate a new random array and reset sorting.
- Resize the window to see the bars adjust dynamically.
- Observe the highlighted bars to understand which elements are being compared and swapped.
- Check the execution time of each sorting algorithm to compare their efficiency.

## Sorting Algorithms Implemented
1. **Bubble Sort** - Repeatedly swaps adjacent elements if they are in the wrong order.
2. **Selection Sort** - Finds the minimum element and swaps it with the first unsorted position.
3. **Insertion Sort** - Builds the sorted list one element at a time by inserting elements in the correct position.
4. **Merge Sort** - A divide-and-conquer algorithm that splits the array into smaller parts and merges them in sorted order.
5. **Quick Sort** - Selects a pivot element and partitions the array around it, recursively sorting the subarrays.

## Future Improvements
- Add more sorting algorithms like Heap Sort and Radix Sort.
- Enhance animations for better visualization and smoother transitions.
- Improve UI with additional customization options such as speed control and color themes.
- Introduce step-by-step execution mode to analyze each sorting step in detail.
- Provide educational insights on the time complexity and best use cases of each sorting algorithm.

## Contributing
Contributions are welcome! If you have suggestions for improvements or additional features, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

