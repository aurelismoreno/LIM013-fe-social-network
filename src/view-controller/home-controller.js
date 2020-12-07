/* eslint-disable no-alert */
import { signOut, currentUser } from '../controller/controller-firebase.js';
import { crearPost } from '../controller/controller-firestore.js';
/* eslint-disable no-console */

export const homeController = {
  actionSignOut: () => {
    signOut().then(() => {
      window.location.hash = '#/';
    });
  },

  actionPublicar: (sectionElement) => {
    const postTexto = sectionElement.querySelector('#postMensajeInput').value;
    const user = currentUser();

    if (postTexto === '') {
      return;
    }

    crearPost(postTexto, user.email)
      .then(() => {
        const formPost = sectionElement.querySelector('#formPost');
        formPost.reset();
      })
      .catch((error) => {
        console.log(error);
        alert('Ócurrio un error intentando crear tu publicacion');
      });
  },
};
