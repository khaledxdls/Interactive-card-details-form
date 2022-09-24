const card_owner = document.querySelector(".card_owner");
document.getElementById("name").maxLength = "16";
document.getElementById("number").maxLength = "19";
document.getElementById("mm").maxLength = "2";
document.getElementById("yy").maxLength = "2";
document.getElementById("cvc").maxLength = "3";
let i = 0;
const exp_date = document.querySelector(".exp_date");
const nom = document.querySelector(".name");
const name_box = document.querySelector(".name_box");
const card_num = document.querySelector(".card_num");
const mm = document.querySelector(".mm");
const yy = document.querySelector(".yy");
const card_mm = document.querySelector(".card_mm");
const card_yy = document.querySelector(".card_yy");
const cvc_number = document.querySelector(".cvc_number");
const card_cvc = document.querySelector(".card_cvc");
const card_number = document.querySelector(".card_number");
const form = document.querySelector(".form_card");
const btn = document.querySelector(".btn-con");
const btn_com = document.querySelector(".btn-complet");
const complet_state = document.querySelector(".complet_state");
const form_box = document.querySelector(".form_box");
let check = true;
let there = true;
let erreur = false;

const number_only = function(event) {
    if (!/\d/.test(String.fromCharCode(event.charCode))) {
        event.preventDefault();
    }
};
nom.addEventListener("input", function(e) {
    card_owner.textContent = e.target.value;
    let size = card_owner.textContent;
    if (size.length >= 16) {
        if (check == true) {
            nom.insertAdjacentHTML(
                "afterend",
                '<p class="erreur" >the name is to long.</p>'
            );
            erreur = true;
        }
        check = false;
    } else {
        check = true;
        if (erreur) {
            name_box.removeChild(name_box.lastElementChild);
            erreur = false;
        }
    }
});
card_num.addEventListener("input", function() {
    console.log(card_num.value.length);
    if (
        card_num.value.length == 4 ||
        card_num.value.length == 9 ||
        card_num.value.length == 14
    ) {
        card_num.value += " ";
    }
    document.addEventListener("keydown", function(e) {
        if (
            e.key == "Backspace" &&
            (card_num.value.length == 5 ||
                card_num.value.length == 10 ||
                card_num.value.length == 15)
        ) {
            card_num.value = card_num.value.slice(0, card_num.value.length - 1);
        }
    });
    card_number.textContent = card_num.value;
});

mm.addEventListener("keypress", number_only);
yy.addEventListener("keypress", number_only);
cvc_number.addEventListener("keypress", number_only);
cvc_number.addEventListener("input", function(e) {
    card_cvc.textContent = e.target.value;
});
mm.addEventListener("input", function(e) {
    card_mm.textContent = e.target.value;
});
yy.addEventListener("input", function(e) {
    card_yy.textContent = e.target.value;
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var regExp = /[a-zA-Z]/g;
    i = 0;
    if (nom.value.length == 0) {
        nom.style.border = "2px solid hsl(0, 100%, 66%)";
        nom.insertAdjacentHTML("afterend", "<p class='erreur'>can't be blank.</p>");
        i = 1;
    }
    if (card_num.value.length == 0) {
        card_num.style.border = "2px solid hsl(0, 100%, 66%)";
        card_num.insertAdjacentHTML(
            "afterend",
            "<p class='erreur'>can't be blank.</p>"
        );
        i = 1;
    }
    if (regExp.test(card_num.value) && card_num.value.length !== 0) {
        card_num.style.border = "2px solid hsl(0, 100%, 66%)";
        card_num.insertAdjacentHTML(
            "afterend",
            "<p class='erreur'>can't contains a latter.</p>"
        );
        i = 1;
    }
    if (mm.value.length == 0 || yy.value.length == 0) {
        exp_date.insertAdjacentHTML(
            "afterend",
            "<p class='erreur'>can't be blank.</p>"
        );
        i = 1;
    }
    if (mm.value.length == 0) {
        mm.style.border = "2px solid hsl(0, 100%, 66%)";
        i = 1;
    }
    if (yy.value.length == 0) {
        yy.style.border = "2px solid hsl(0, 100%, 66%)";
        i = 1;
    }
    if (cvc_number.value.length == 0) {
        cvc_number.style.border = "2px solid hsl(0, 100%, 66%)";
        cvc_number.insertAdjacentHTML(
            "afterend",
            "<p class='erreur'>can't be blank.</p>"
        );
        i = 1;
    }
    if (cvc_number.value.length < 3 && cvc_number.value.length > 0) {
        cvc_number.style.border = "2px solid hsl(0, 100%, 66%)";
        cvc_number.insertAdjacentHTML(
            "afterend",
            "<p class='erreur'>wrong format.</p>"
        );
        i = 1;
    }
    if (i == 0) {
        complet_state.classList.toggle("hidden");
        form_box.classList.toggle("hidden");
    }
});
btn_com.addEventListener("click", function() {
    window.location.reload();
});