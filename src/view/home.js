/* eslint-disable no-plusplus */
import { homeController } from '../view-controller/home-controller.js';
/* eslint-disable no-console */
/* eslint-disable no-undef */

export default () => {
  const homeView = `
  <header class="header">
  <!-- Navigation bar -->
  <section class="topnav">
    <!--navigation logo y menu-->
    <section class="flexNav">
      <!--menu deploy-->
      <section class="menu-deploy">
        <i class="fa fa-bars"></i>
      </section>
      <!-- Links -->
      <nav class="listItem" id="listItem">
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/profile">Profile</a></li>
        </ul>
        <button type="button" id="signOutbutton">CERRAR SESION</button>
      </nav>
      <!-- Brand/Logo -->
      <section class="logo">
        <a class="navbar-brand">COSplay</a>
      </section>
      <!-- Log out -->
      <section class="logout"></section>
    </section>
  </section>
</header>
<main>
  <form id="formPost">
  <textarea id="postMensajeInput"></textarea>
  <button type="button" id="publicartbutton">PUBLICAR</button>
  </form>

  <ul id="listado"></ul>

</main>
<aside></aside>
  `;
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  // sectionElement.classList.add('position');
  sectionElement.innerHTML = homeView;

  // Accion del boton SignOut
  const signOutButton = sectionElement.querySelector('#signOutbutton');

  signOutButton.addEventListener('click', () => {
    homeController.actionSignOut();
  });
  // Accion del boton publicar
  const publicarBtn = sectionElement.querySelector('#publicartbutton');

  publicarBtn.addEventListener('click', () => {
    homeController.actionPublicar(sectionElement);
  });
  // Pintando post en el home
  const ulElement = sectionElement.querySelector('#listado');


  const printPost = (dataPost) => {
    const liTemplate = `
            <h5>${dataPost.autor} -  ${dataPost.fecha} </h5>
            <p>${dataPost.post}</p>
            
        `;
    // Insertando el template en la interfaz
    const liElement = document.createElement('li');

    liElement.innerHTML = liTemplate;
    ulElement.appendChild(liElement);
  };

  const printListadoPost = (posts) => {
    ulElement.innerHTML = '';
    posts.forEach((post) => {
      printPost(post);
    });
  };
  // listado
  const db = firebase.firestore();
  db.collection('posts').orderBy('fecha', 'desc').onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    printListadoPost(posts);
  });
  return sectionElement;
};
