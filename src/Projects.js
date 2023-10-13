// ProjectList.js
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function Projects() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Firestore
    const db = firebase.firestore();

    // Assuming you have a collection named "images"
    const imagesRef = db.collection('projects');

    imagesRef.onSnapshot((snapshot) => {
      const ProjectList = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        ProjectList.push({
          id: doc.id,
          ...data,
        });
      });

      setImages(ProjectList);
    });
  }, []);

  return (
    <div>
      <h2>Your Projects</h2>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <strong>{image.imageName}</strong>
            <p>{image.imageDescription}</p>
            <img src={image.imageUrl} alt={image.imageName} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
