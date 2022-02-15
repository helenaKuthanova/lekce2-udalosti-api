// tady je místo pro náš program
console.log("Jsem nalinkován");

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

let ctverecek = document.querySelector("div.zluty");
ctverecek.classList.add("ctverecek");

nadpis.classList.remove("zluty");

let pocitadlo = 0
function priNajetiNaCtverec() {
    console.log("test-" + pocitadlo);
    // pocitadlo += 1
    pocitadlo++
}

function zmenStyl() {
    nadpis.classList.toggle("zeleny");
}

function priNajetiMysiZtucni() {
    let odstavec = document.querySelector("p");
    odstavec.classList.toggle("tucny")
}

function stiskKlavesy(udalost) {
    console.log(udalost.key)
}