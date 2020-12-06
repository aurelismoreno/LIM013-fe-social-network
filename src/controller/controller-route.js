// Eventos
// Listando los datos para los usuarios que estan autenticados


auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection('posts');
  } else {
    console.log('signuot');
  }
});
