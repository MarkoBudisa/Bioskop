export class kartica
{
    constructor()
    {
        /*this.ime=null;
        this.prez=null;
        this.datRodj=null;
        this.vrstaKartice=null;
        this.nizKartica=null;
        this.formaKartice=null;*/
        //kartica ce da ima niz kartica da zna koje je dodala(po jmbg)
        //ali za server posle to verovatno nece da bude potrebno
        //koment
    }
    crtajUnosZaNovuKarticu(host)
    {
        const formaZaUnosNoveKartice=document.createElement("div");
        formaZaUnosNoveKartice.className="forme"
        this.formaZaUnosNoveKartice=formaZaUnosNoveKartice;
        host.appendChild(formaZaUnosNoveKartice);

        let labelaNaslov=document.createElement("h3");
        labelaNaslov.innerHTML="Dodavanje nove VIP kartice";
        labelaNaslov.className="labelaNaslov";
        formaZaUnosNoveKartice.appendChild(labelaNaslov);

        let elementiForme=["Ime","Prezime","JMBG","Vrsta kartice"];
        let nizNizova=[];
        elementiForme.forEach(el=>{
            let input=document.createElement("input");//input za elemente za projekciju
                input.classList="inputi";
                input.placeholder=el;
                nizNizova.push(input);
                formaZaUnosNoveKartice.appendChild(input);
                if(el=="Vrsta kartice")
                {
                    input.classList="inputi inputi1";
                    input.disabled=true;
                    nizNizova.pop();
                }
                else if(el=="JMBG")
                {
                    input.type="number";
                }
            
        });
        ////////
        let radioButtons=document.createElement("div");//kontejner za radio buttone
        radioButtons.className="radioButtonsClass";
        let radioOpcije=["Silver(10%)","Gold(20%)","Platinum(30%)"];
        radioOpcije.forEach(el=>{
            let labelaRadio=document.createElement("label");
            labelaRadio.className="labelaRadio";
            labelaRadio.innerHTML=el;
            radioButtons.appendChild(labelaRadio);
            let radioButton=document.createElement("input");
            radioButton.type="radio";
            radioButton.value=el;
            radioButton.name="radioGrupa1";
            radioButtons.appendChild(radioButton);
        });
        formaZaUnosNoveKartice.appendChild(radioButtons);
        /////////

        let buttonDodaj=document.createElement("button");//dugme za dodavanje nove kartice
        buttonDodaj.innerHTML="Dodaj";
        buttonDodaj.className="btnDodaj";
        formaZaUnosNoveKartice.appendChild(buttonDodaj);

    }
}