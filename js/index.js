let btnY = document.getElementById("btnY"),
    btnG = document.getElementById("btnG");


btnG.addEventListener("click",() =>{
    let inputG = document.getElementById("inputG").value,
    url = `https://www.google.com/search?q=${inputG}`;
    if (inputG !== '') {
        window.open(url, "_blank");
        inputG= '';
    }
})
btnY.addEventListener("click", () =>{
    let inputY = document.getElementById("inputY").value,
    url = `https://yandex.com/search/?text=${inputY}`;
    if (inputY !== '') {
        window.open(url, "_blank");
        inputY = '';
    }
})




