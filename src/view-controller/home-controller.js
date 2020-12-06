import { signOut, currentUser } from '../controller/controller-firebase.js';
import { crearPost } from '../controller/controller-firestore.js';
/* eslint-disable no-console */

export const homeController = {
  actionSignOut: () => {
    signOut().then(() => {
      window.location.hash = '#/';
    })
  },

  actionPublicar: (sectionElement) => {
    const postTexto = sectionElement.querySelector('#postMensajeInput').value;
    if (postTexto === '') {
      return;
    }

    const user = currentUser();


    crearPost(postTexto,user.email);
    //console.log(user.email);



  },
};
