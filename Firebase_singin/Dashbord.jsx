import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Fetch user data from Firestore when user is set
  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  // Function to get user data from Firestore
  const fetchUserData = async () => {
   
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserName(userData.name || 'User'); // Set the user name from Firestore data
      } 
    
  };

  return (
    <div className="dashboard-container">
    <div className="dashboard-card">
      <h1>Welcome to the Website...</h1>
      {userName && <h2>Hello, {userName}!</h2>}
    </div>
  </div>
  );
}
