/* eslint-disable no-console */
// Inicializa Cloud Firestore

// Crea una colección nueva y un documento
export const crearPost = (post,autor)=>{
  const db = firebase.firestore();
  return db.collection('posts').add({
    autor: autor,
    post: post,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}
