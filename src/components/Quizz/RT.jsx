import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkR4MESgjh20z9yaM1s1AXX99qquDn2ss",
  authDomain: "sanfoundry-sc.firebaseapp.com",
  projectId: "sanfoundry-sc",
  storageBucket: "sanfoundry-sc.appspot.com",
  messagingSenderId: "527997111994",
  appId: "1:527997111994:web:35a22b150a14f2e3c1bc83",
  measurementId: "G-8Q04XQCCSR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function RetrieveQuiz({ courseCode, unit, quizName }) {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Create a reference to the quizzes collection within the specified unit
    const quizzesCollectionRef = collection(
      doc(db, 'courses', courseCode),
      unit
    );

    // Define a query to get the quiz document with the specified quizName
    const q = query(
      quizzesCollectionRef,
      where('quizTitle', '==', quizName)
    );

    // Fetch the quiz document
    setLoading(true);
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.docs.length === 1) {
          const quizDoc = querySnapshot.docs[0];
          setQuiz({ id: quizDoc.id, ...quizDoc.data() });
        } else {
          setQuiz(null); // No matching quiz found
        }
      })
      .catch((error) => {
        console.error('Error fetching quiz: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [courseCode, unit, quizName]);

  return (
    <div>
      {/* Your component JSX to display the retrieved quiz */}
      {loading ? (
        <p>Loading quiz...</p>
      ) : quiz ? (
        <>
          <h2>Quiz: {quiz.quizTitle}</h2>
          {/* <ReactJson src={quiz.quizData} /> */}
        </>
      ) : (
        <p>No matching quiz found</p>
      )}
    </div>
  );
}

export default RetrieveQuiz;
