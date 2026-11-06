const pwd = document.querySelector("#password");
pwd.addEventListener("change", checkMatching);

const pwdConfirm = document.querySelector("#password-confirm");
pwdConfirm.addEventListener("change", checkMatching);

function checkMatching() {
    console.log("checkMatching called!");
    if (pwdConfirm.value != pwd.value) {
        pwdConfirm.setCustomValidity("Password is not matching.");
    }
    else {
        pwdConfirm.setCustomValidity("");
    }
}