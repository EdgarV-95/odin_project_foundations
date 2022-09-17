const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (e.target.value) {
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
    }
  });
});


const submit_btn = document.querySelector('.sign-up-btn');

submit_btn.addEventListener('click', test);
function test() {
    let pass_field = document.getElementById('password').value;
    let pass_re_field = document.getElementById('password-re').value;
    if (pass_field != pass_re_field) {
      return alert('Try again');
    }
    if (pass_field.length <= 5 && pass_re_field.length <= 5 ) {
      return alert('Try again');
    }
    return alert('Thank you for registering!');
}