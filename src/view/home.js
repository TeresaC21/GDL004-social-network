import {
  addPost,
} from '../model/store.js';

export default (user) => {
  const viewPost = document.createElement('div');

  viewPost.innerHTML = `

  <button id="btnClosed">Sign off</button>
    
  <h2 class="text-center">${user.email}</h2>
 <figure class="text-center">
 <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
 </figure>


  <form id="form-addPost">
      <input name="post" type="text" id="addPost" placeholder="¿Qué te gustaría compartir hoy?"></br>
      <button type="submit" id="btn-addPost">Publicar</button></br>
      <div>
      <button> Galeria </button>
      <select>
          <option>Publico</option>
          <option>Privado</option>
      </select>
      </div> 
      </br>
   </form>

   
  `;

  const btn = viewPost.querySelector('#btn-addPost');
  btn.addEventListener('click', addPost);

  // document.getElementById('contentHome').appendChild(viewPost);
  return viewPost;
};

// export default () => {
export const watchUser = `
     <button id="btnClosed">Sign off</button>
    
     <h2 class="text-center">!HOLA BIENVENIDO¡</h2>
    <figure class="text-center">
    <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
    </figure>
    `;
const divElem = document.createElement('div');
divElem.innerHTML = watchUser;
