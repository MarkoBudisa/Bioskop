import {sala} from "./sala.js"
export class projekcija{

  constructor(){

    this.sala = null;
    this.sale = [];

};

    /*F-JA ZA CRTANJE PROJEKCIJE*/
  crtajFormuZaNovuProjekciju(host){/*Host je ovde kontejnerZaForme*/

    let kontejnerZaBioskope=document.createElement("div");/*Kreiranje kontejnera za bioskope*/
    kontejnerZaBioskope.className = "kontejnerZaBioskope";/*Klasa*/

    const formaZaUnosProjekcije = document.createElement("div");/*Kontejner za formu za projekciju*/
    formaZaUnosProjekcije.className = "forme";/*Klasa forme za unos projekcije*/
    host.appendChild(formaZaUnosProjekcije);/*Dodavanje elementa na host(kontejner za forme)*/

    let labelaNaslov = document.createElement("h3");/*Naslov forme za unos projekcije*/
    labelaNaslov.innerHTML = "Dodavanje nove projekcije";
    labelaNaslov.className = "labelaNaslov";//Klasa za naslov forme za unos projekcije
    formaZaUnosProjekcije.appendChild(labelaNaslov);/*Dodavanje labeleNslov u formu za projekciju*/

    /*Elemnti na formi*/
    let elementiForme = ["Ime filma", "Datum projekcije", "Vreme projekcije", "Cena karte (RSD)", "Sala br.", "Velicina sale"];

    let kontejnerDatum = document.createElement("div");/*Kontejner za labelu datum i datumUnos*/
    kontejnerDatum.className = "kontejnerDatum";/*Klasa za kontejner datuma*/

    let datum = document.createElement("input");/*Input datum*/
    datum.className = "datum";
    datum.type = "date";

    let kontejnerVreme = document.createElement("div");/*Kontejner za labelu vreme i vremeUnos*/
    kontejnerVreme.className = "kontejnerDatum";/*Klasa za kontejner vreme*/

    let vreme = document.createElement("input");/*Input vreme*/
    vreme.className = "datum";
    vreme.type = "time";

    let nizElemenata = [];/*Niz koji sluzi za elemente kad se salju bioksopskoj sali na obradu*/

    elementiForme.forEach((el) => {/*Petlja koja pravi elemente na formi za projekciju(MOZDA I NE MORA!!!)*/   
            
      let input = document.createElement("input");/*input za elemente na formi za projekciju*/
      input.classList = "inputi";/*Klasa za sve inpute na formi za projekciju*/
      input.placeholder = el;
      nizElemenata.push(input);/*Ubacivanje u niz elemenata*/
      formaZaUnosProjekcije.appendChild(input);/*Dodavanje inputa na formu*/

      if(el == "Velicina sale" ){/*Velicina sale*/

        input.classList = "inputi inputi1";/*Inputi1 samo skida border*/
        input.disabled = true;
        nizElemenata.pop();/*Izbacujemo ga jer necemo iz njega da citmao podatke*/

}
      else if( el == "Datum projekcije"){
        input.classList = "inputi inputi1";/*Inputi1 samo skida border*/
        input.disabled = true;
        kontejnerDatum.appendChild(input);
        kontejnerDatum.appendChild(datum);
        nizElemenata.pop();/*Izbacujemo ga jer necemo iz njega da citmao podatke*/
        nizElemenata.push(datum);/*Ubacujemo input za datum*/
        formaZaUnosProjekcije.appendChild(kontejnerDatum);

}
      else if(el == "Vreme projekcije"){

        input.classList = "inputi inputi1";/*Inputi1 samo skida border*/
        input.disabled = true;
        kontejnerVreme.appendChild(input);
        kontejnerVreme.appendChild(vreme);
        nizElemenata.pop();/*Izbacujemo ga jer necemo iz njega da citmao podatke*/
        nizElemenata.push(vreme);/*Ubacujemo input za vreme*/
        formaZaUnosProjekcije.appendChild(kontejnerVreme);

}
      else if(el == "Cena karte (RSD)" || el == "Sala br."){

        input.type = "number";/*Menjamo input za cenu karte i broj sale*/

}

});

    let kontejnerZaSelekcije = document.createElement("div");/*Kontejner za velicine(selekcije)*/
    kontejnerZaSelekcije.className = "kontejnerZaSelekcije";/*Klasa za kontejner z aselekcije*/

    let selectY = document.createElement("select");//SelectOpcijaY
    selectY.className = "select";

    let selectX = document.createElement("select");//SelectOpcijaX
    selectX.className = "select";
    
    for(let vr = 5; vr < 13; vr++){/*For petlja za ubacivanje elemenata u select*/
    
      let option1 = document.createElement("option");
      option1.value = vr;
      option1.text = vr;
      selectY.appendChild(option1);

      let option2 = document.createElement("option");
      option2.value = vr;
      option2.text = vr;
      selectX.appendChild(option2);

}

    kontejnerZaSelekcije.appendChild(selectX);/*Dodavanje selekcije X u kontejner za selekcije*/
    kontejnerZaSelekcije.appendChild(selectY);/*Dodavanje selekcije Y u kontejner za selekcije*/
    formaZaUnosProjekcije.appendChild(kontejnerZaSelekcije);/*Dodavanje kontejnera za selekcije u kontejner za formu projekcije*/

    let buttonDodaj = document.createElement("button");/*Dugme za dodavanje nove sale*/
    buttonDodaj.innerHTML = "Dodaj";
    buttonDodaj.className = "btnDodaj";/*Klasa za dugme za dodavanje nove sale*/ 

    buttonDodaj.onclick = (ev) =>{/*Event handler za button*/
      let pomElProvera = 1;//Pomocna za proveru unosa svih elemenata
      nizElemenata.forEach(el => {/*Provera da li je sve lepo uneto*/

        if(el.value == ""){ pomElProvera = 2;};

});
      if(pomElProvera == 1){/*Ako je sve lepo uneto*/

        this.sala = 
        new sala(nizElemenata[0].value,datum.value,vreme.value,nizElemenata[3].value,nizElemenata[4].value,selectX.value,selectY.value);
        this.sale.push(sala);//Niz sala(BUDUCA IMPLEMENTACIJA!!!)
        this.sala.crtajSalu(document.body);
        nizElemenata.forEach( el => {/*Vracanje elemenata forme na "Basic""*/
          el.value = "";
          selectY.value = 5;
          selectX.value = 5;

});
        
}
      else{ alert("Niste uneli sve podatke")};
    
}; 

    formaZaUnosProjekcije.appendChild(buttonDodaj);/*Dodamo button na formu projekcija*/

};

}