const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#sendid');


$form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form =  new FormData(this)
    // console.log(form.get('fname'));
    // console.log(form.get('lname'));
    // console.log(form.get('email'));
    // console.log(form.get('textArea'));

    $buttonMailto.setAttribute('href', `mailto:franciscog941@gmail.com?subject=${form.get('fname')} ${form.get('lname')} ${form.get('email')}&body=${form.get('textArea')}`);
    $buttonMailto.click()
}