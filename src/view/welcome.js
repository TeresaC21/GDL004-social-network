
export default () => {
  const viewWelcome = document.createElement('div');
  viewWelcome.innerHTML = `
    <form id="form-emailEnter">
      <input name="email" type="email" id="formInputEmail" placeholder="email"></br>
      <input name="password" type="password" id="formInputPassw" placeholder="password" minlength=1></br>
      <button class="buttons" type="submit" id="btn-email"><a href="#/home">Iniciar sesión</a></button></br>

      <button class="buttons btnreg" type="submit" id="register"><a href="#/register">regístrate</a></button></br></br>
    <div id=containerEmpty>
    </div>
   </form>`;

  //const btn = viewWelcome.querySelector('#btn-email');
  //btn.addEventListener('click', enterUser);
  viewWelcome.classList.add('d-flex','justify-content-center','align-items-center','flex-direction-column','vh-100');
  // document.getElementById('form-create').appendChild(viewWelcome);
  return viewWelcome;
};

/*
  const buttonFacebook = document.createElement('div');
  const domString = '<div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>';
  buttonFacebook.innerHTML = domString;
  viewWelcome.appendChild(buttonFacebook.firstChild);

  const buttonGoogle = document.createElement('div');
  const domDiv = '<div class="g-signin2" data-onsuccess="onSignIn"></div>';
  buttonGoogle.innerHTML = domDiv;
  viewWelcome.appendChild(buttonGoogle.firstChild);

  buildElement('a', 'Registrar', '', 'form-email'); // al hacer click te enviaria al formulario de registro
*/

// const divElem = document.createElement('div');
// divElem.innerHTML = viewWelcome;


// viewWelcome.querySelector("#btn-email").addEventListener("click", (e) => {
// e.preventDefault();
// logInFn(userEmail.value, userPassword.value);

// const formEnter = document.querySelector('#btn-email');
// formEnter.addEventListener('click', enterUser);
// return divElem;
