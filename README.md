# React Firebase onAuthStateChanged Unsubscribe Bug

This repository demonstrates a common bug in React applications using Firebase Authentication: forgetting to unsubscribe from `onAuthStateChanged`.  Failure to unsubscribe results in memory leaks and potential unexpected behavior.

## The Bug
The `onAuthStateChanged` listener continuously listens for authentication changes.  If not unsubscribed from when the component unmounts, it remains active, causing memory issues and potential conflicts.

## The Solution
Properly unsubscribe using the returned unsubscribe function within the component's cleanup function (e.g., `useEffect`'s return).  This ensures that the listener is removed when the component is no longer needed.

## How to reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the console logs and the memory usage (using your browser's developer tools). The bug version will show a persistent listener, while the solution version will properly unsubscribe.

This example highlights the importance of resource management in React and Firebase.