document.getElementsByTagName('form')[0].addEventListener('submit',() => {
    event.preventDefault();
    if(!validateEmail(event.target.elements[0].value)){
        document.getElementsByClassName('error-msg')[0].classList.remove('hide');
        event.target.querySelector('picture').classList.remove('hide');
        event.target.elements[0].classList.add('input-err');
    }else{
        document.getElementsByClassName('error-msg')[0].classList.add('hide');
        event.target.querySelector('picture').classList.add('hide');
        event.target.elements[0].classList.remove('input-err');
    }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};