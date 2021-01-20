export class kartica{
  constructor(){
  this.formaZaUnosNoveKartice = null;
  this.id=0;
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
    let nizInputa=[];
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
      nizInputa.push(input);
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
    var vredPop=document.getElementsByName("radioGrupa1");
    var valuee;
    for(let i=0;i<vredPop.length;i++)
    {
      if(vredPop[i].checked)
      {
        valuee=vredPop[i].value;
        break;
      }
    }
    let datee=new Date();
    let id=Math.round(Math.random()*1000+datee.getMinutes()+datee.getSeconds());
    fetch("https://localhost:5001/Bioskop/UpisKartice/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({/*Kroz body upisujemo u bazu podataka*/
            "ime": nizInputa[0].value,
            "prezime": nizInputa[1].value,
            "jmbg": nizInputa[2].value,
            "eMail": nizInputa[3].value,
            "vrstaKartice": valuee,
            "idKartice" : id
          })
      })
      alert(`Cestitamo, postali ste korisnik VIP karrtice\n Vas ID je: ${id}`);
      nizInputa.forEach(p=>{p.value=""});
    };

    formaZaUnosNoveKartice.appendChild(buttonDodaj);
  };
}