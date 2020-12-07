// Crear usuario con correo y contraseña
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
};

// Usuario creado ingresa con correo y contraseña
export const logIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// Cerrar Sesion
export const signOut = () => firebase.auth().signOut();

// Capturar usurio actual
export const currentUser = () => firebase.auth().currentUser;

// Enviar email para verificar cuenta
export const sendEmailCheck = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};
