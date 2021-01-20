import {sala} from "./sala.js"
export class projekcija{

  constructor(){

    this.sala = null;
    this.sale = [];

};
  napraviNoviElement(tipElementa,imeKlase,innerHtml,type,host){//return taj kreirani element

    var elemet = document.createElement(tipElementa);
    elemet.classList = imeKlase;
    elemet.innerHTML = innerHtml;
    elemet.type = type;
    host.appendChild(elemet);
    return elemet;
};
  pushSale(sala)
  {
    this.sale.push(sala);
  };
  proveraValidacije(niz){
    var pom = 1;
    niz.forEach( el=>{
      if(el.value == ""){
        pom = 2;
      }   
    });
    return pom;
};
    /*F-JA ZA CRTANJE PROJEKCIJE*/
  crtajFormuZaNovuProjekciju(host){/*Host je ovde kontejnerZaForme*/

    let nizElemenataForme=[];

    const formaZaUnosProjekcije = this.napraviNoviElement("div","forme","","",host);

    let labelaNaslov = this.napraviNoviElement("h3","labelaNaslov","Dodavanje nove projekcije","",formaZaUnosProjekcije);

    let imeFilma = this.napraviNoviElement("input","inputi","","",formaZaUnosProjekcije);
    imeFilma.placeholder = "Ime filma";
    imeFilma.maxLength = "20";
    nizElemenataForme.push(imeFilma);
    
    let kontejnerDatum = this.napraviNoviElement("div","kontejnerDatum","","",formaZaUnosProjekcije);

    let datumProjekcije = this.napraviNoviElement("input","inputi inputi1","","",kontejnerDatum);
    datumProjekcije.disabled = true;
    datumProjekcije.placeholder = "Datum projekcije";
    let datum = this.napraviNoviElement("input","datum","","date",kontejnerDatum);
    nizElemenataForme.push(datum);

    let kontejnerVreme = this.napraviNoviElement("div","kontejnerDatum","","",formaZaUnosProjekcije);

    let vremeProjekcije = this.napraviNoviElement("input","inputi inputi1","","",kontejnerVreme);
    vremeProjekcije.disabled = true;
    vremeProjekcije.placeholder = "Vreme projekcije";
    let vreme = this.napraviNoviElement("input","datum","","time",kontejnerVreme);
    nizElemenataForme.push(vreme);

    let cenaKarte = this.napraviNoviElement("input","inputi","","",formaZaUnosProjekcije);
    cenaKarte.placeholder = "Cena karte (RSD)";
    cenaKarte.min = "100";
    cenaKarte.max = "1000";
    cenaKarte.type = "number";
    nizElemenataForme.push(cenaKarte);

    let brojSale = this.napraviNoviElement("input","inputi","","",formaZaUnosProjekcije);
    brojSale.placeholder = "Broj sale";
    brojSale.min = "1";
    brojSale.max = "20";
    brojSale.type = "number";
    nizElemenataForme.push(brojSale);

    let velicinaSale = this.napraviNoviElement("input","inputi inputi1","","",formaZaUnosProjekcije);
    velicinaSale.placeholder = "Velicina sale";
    velicinaSale.disabled = true;

    let kontejnerZaSelekcije = this.napraviNoviElement("div","kontejnerZaSelekcije","","",formaZaUnosProjekcije);

    let selectY = document.createElement("select");//SelectOpcijaY
    selectY.className = "select";

    let selectX = document.createElement("select");//SelectOpcijaX
    selectX.className = "select";

    
    kontejnerZaSelekcije.appendChild(selectX);/*Dodavanje selekcije X u kontejner za selekcije*/
    kontejnerZaSelekcije.appendChild(selectY);/*Dodavanje selekcije Y u kontejner za selekcije*/
    
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

    let buttonDodaj = this.napraviNoviElement("button","btnDodaj","Dodaj","",formaZaUnosProjekcije);


    buttonDodaj.onclick = (ev) =>{/*Event handler za button*/

      if(this.proveraValidacije(nizElemenataForme) == 1){/*Ako je sve lepo uneto*/

        fetch("https://localhost:5001/Bioskop/UpisSale/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({/*Kroz body upisujemo u bazu podataka*/
                    "nazivFilma": imeFilma.value,
                    "datumProjekcije": datum.value,
                    "vremeProjekcije": vreme.value,
                    "cenaKarte": cenaKarte.value,
                    "brojSale": brojSale.value,
                    "x": selectX.value,
                    "y": selectY.value,
                    "nizSedista" : ""

                })
            })   
        this.sala = 
        new sala(0,imeFilma.value,datum.value,vreme.value,cenaKarte.value,brojSale.value,selectX.value,selectY.value,"");
        this.sale.push(sala);
        this.sala.crtajSalu(document.body);
        
        imeFilma.value="";
        datum.value="";
        vreme.value="";
        cenaKarte.value="";
        brojSale.value="";
        selectX.value=5;
        selectY.value=5;
        window.location.reload();
        
}
      else{ alert("Niste uneli sve podatke")};
    
};  

};

}