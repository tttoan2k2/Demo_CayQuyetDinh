const btnSubmit = document.getElementById("btn");
const modal = document.querySelector(".modal");
const btnClose = document.getElementById("btn-close");
const modalDes = document.querySelector(".modal-des");

btnSubmit.addEventListener("click", () => {
    let [...eleInput] = document.getElementsByTagName("input");
    console.log(eleInput);
    let arrValue = [];

    for (let i = 0; i < eleInput.length; i++) {
        if ((eleInput[i].type = "radio")) {
            if (eleInput[i].checked) {
                arrValue.push(eleInput[i].value);
            }
        }
    }
    console.log(arrValue);

    if (arrValue[1] === "dg") {
        modalDes.textContent = "Bạn nên đi du học";
    }
    if (arrValue[1] === "bt" && arrValue[2] === "tb") {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (arrValue[1] === "bt" && arrValue[2] === "k") {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (arrValue[1] === "bt" && arrValue[2] === "g") {
        modalDes.textContent = "Bạn nên đi du học";
    }
    if (arrValue[1] === "kk" && arrValue[0] === "khdh") {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (arrValue[1] === "kk" && arrValue[0] === "dtn") {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (
        arrValue[1] === "kk" &&
        arrValue[0] === "dhdh" &&
        arrValue[2] === "tb"
    ) {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (arrValue[1] === "kk" && arrValue[0] === "dhdh" && arrValue[2] === "k") {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (
        arrValue[1] === "kk" &&
        arrValue[0] === "dhdh" &&
        arrValue[2] === "t" &&
        arrValue[3] === "khong"
    ) {
        modalDes.textContent = "Bạn không nên đi du học";
    }
    if (
        arrValue[1] === "kk" &&
        arrValue[0] === "dhdh" &&
        arrValue[2] === "g" &&
        arrValue[3] === "co"
    ) {
        modalDes.textContent = "Bạn nên đi du học";
    }

    for (let i = 0; i < eleInput.length; i++) {
        if ((eleInput[i].type = "radio")) {
            eleInput[i].checked = false;
        }
    }

    modal.classList.remove("modal-close");
});

btnClose.addEventListener("click", (e) => {
    modal.classList.add("modal-close");
});

modal.addEventListener("click", () => {
    modal.classList.add("modal-close");
});
