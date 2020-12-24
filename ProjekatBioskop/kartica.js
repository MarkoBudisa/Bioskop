export class kartica{
  constructor(){

    this.formaZaUnosNoveKartice = null;

};

/*F-JA ZA CRTANJE KARTICE*/
  crtajUnosZaNovuKarticu(host){//Host je kontejner gde idu forme za unos

    const formaZaUnosNoveKartice = document.createElement("div");//Forma je kontejner gde idu elementi za unos
    formaZaUnosNoveKartice.className = "forme"
    this.formaZaUnosNoveKartice = formaZaUnosNoveKartice;
    host.appendChild(formaZaUnosNoveKartice);

    let labelaNaslov = document.createElement("h3");//Naslov za formu za unos nove kartice
    labelaNaslov.innerHTML = "Dodavanje nove VIP kartice";
    labelaNaslov.className = "labelaNaslov";
    formaZaUnosNoveKartice.appendChild(labelaNaslov);

    let elementiForme = ["Ime", "Prezime", "JMBG", "E-mail", "Vrsta kartice"];//Elementi na formi

    elementiForme.forEach(el => {//Dodavanje elementa na formu
      let input = document.createElement("input");//input za elemente za projekciju
      input.classList = "inputi";
      input.placeholder = el;

      formaZaUnosNoveKartice.appendChild(input);
      if(el == "Vrsta kartice"){
        input.classList = "inputi inputi1";
        input.disabled = true;

}
      else if(el == "JMBG"){input.type = "number"}
      else if(el == "E-mail"){input.type = "email"};

});

    let radioButtons = document.createElement("div");//Kontejner za radio buttone
    radioButtons.className = "radioButtonsClass";
    let radioOpcije = ["Silver(10%)", "Gold(20%)", "Platinum(30%)"];

    radioOpcije.forEach(el => {//Dodavanje radio buttona u njihov kotejner
      
      let labelaRadio = document.createElement("label");
      labelaRadio.className = "labelaRadio";
      labelaRadio.innerHTML = el;
      radioButtons.appendChild(labelaRadio);
      let radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.value = el;
      radioButton.name = "radioGrupa1";
      radioButtons.appendChild(radioButton);

});
    formaZaUnosNoveKartice.appendChild(radioButtons);//Dodajemo kontejner za radio buttone na formu

    let buttonDodaj = document.createElement("button");//dugme za dodavanje nove kartice
    buttonDodaj.innerHTML = "Dodaj";
    buttonDodaj.className = "btnDodaj";

    buttonDodaj.onclick=ev=>{
      //IMPLEMENTACIJA NA BUTTON DODAJ ZA KARTICU
};

    formaZaUnosNoveKartice.appendChild(buttonDodaj);

};

}