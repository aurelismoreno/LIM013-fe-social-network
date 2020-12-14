/* eslint-disable object-shorthand */
/* eslint-disable no-console */
// Inicializa Cloud Firestore

// Crea una colección nueva y un documento
export const createPost = (post, author, userId, privacy) => {
  const fs = firebase.firestore();
  return fs.collection('userPosts').add({
    userId: userId,
    loggedUser: author,
    postTextContent: post,
    date: new Date().toISOString(),
    privacy: privacy,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
