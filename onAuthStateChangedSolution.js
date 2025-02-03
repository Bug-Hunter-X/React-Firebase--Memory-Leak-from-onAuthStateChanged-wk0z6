import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase'; // Assuming you have firebase setup

function MyComponent() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('user is signed in', user.uid);
      } else {
        // User is signed out
        console.log('user is signed out');
      }
    });
    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  return (
    <div>
      {/* Component content */}
    </div>
  );
}

export default MyComponent;