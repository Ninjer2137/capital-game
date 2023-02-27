var json = []
var dob = 0
var bld = 3

async function getData() {
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)
}

getData()

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function losowankoZapraszam() {
    var max = json.length-1
    return Math.floor(Math.random() * max);
}

function losujKraje(){

    document.getElementById("interface").innerHTML = ""
    document.getElementById("gra").innerHTML = ""

    var kraj = json[losowankoZapraszam()]
    console.log(kraj)

    var div_kraj = document.createElement("div")

    const input_kraj = document.createElement("input")
    input_kraj.setAttribute("id", "szukaj")
    input_kraj.setAttribute("onchange", "sprawdz()")

    var wybr = input_kraj.value

    const stolica_kraj = document.createElement("h1")
    stolica_kraj.innerHTML = kraj.capital

    div_kraj.setAttribute("id", "kraj")
    div_kraj.classList.add("flip-in-diag-2-tl")

    input_kraj.setAttribute("onchange", `sprawdz("${kraj.capital}", "${wybr}")`)

    const nazwa_kraj = document.createElement("h1")

    nazwa_kraj.innerHTML = kraj.name

    const flaga_kraj = document.createElement("img")

    flaga_kraj.setAttribute("src", kraj.flag)

    div_kraj.appendChild(nazwa_kraj)
    div_kraj.appendChild(flaga_kraj)
    div_kraj.appendChild(input_kraj)
    document.getElementById("gra").append(div_kraj)

    const odp = document.createElement("div")
    odp.setAttribute("id", "odp")
    document.getElementById("gra").appendChild(odp)

    console.log(kraj.capital)
}

function sprawdz(_kraj, wybrany){
    console.log(_kraj)
    console.log(wybrany)
    console.log(dob)
    console.log(bld)

    var bld3 = bld-1

    const dob2 = document.createElement("h1")
    const bld2 = document.createElement("h1")

    const odpo = document.getElementById("kraj")
    if(wybrany.includes(_kraj)){
        document.getElementById("odp").style.backgroundColor = "green"
        dob=dob+1
        wait(2000)
        losujKraje()
    
        dob2.innerHTML = "Dobre odpowiedzi: " + dob
        document.getElementById("interface").appendChild(dob2) 

        bld2.innerHTML = "Pozostało " + bld + " pomyłek"
        document.getElementById("interface").appendChild(bld2)
    } else if(!wybrany.includes(_kraj)){
        document.getElementById("odp").style.backgroundColor = "red"
        bld=bld-1
        wait(2000)
        if(bld<=0){
            document.getElementById("gra").innerHTML = ""
            document.getElementById("interface").innerHTML = ""
        } else{
        losujKraje()
        }
    
        dob2.innerHTML = "Dobre odpowiedzi: " + dob
        document.getElementById("interface").appendChild(dob2) 
        
        bld2.innerHTML = "Pozostało " + bld3 + " pomyłek"
        document.getElementById("interface").appendChild(bld2)
    }
}