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
    }
    crtajUnosZaNovuKarticu(host)
    {
        const formaZaUnosNoveKartice=document.createElement("div");
        formaZaUnosNoveKartice.className="forme"
        this.formaZaUnosNoveKartice=formaZaUnosNoveKartice;
        host.appendChild(formaZaUnosNoveKartice);

        let elementiForme=["Ime","Prez","JMBG","Vrsta kartice"];

        elementiForme.forEach(el=>{
            let labela=document.createElement("label");
            labela.innerHTML=el;
            labela.className="labele";
            formaZaUnosNoveKartice.appendChild(labela);
            if(el!="Vrsta kartice"){
                let input=document.createElement("input");
                input.className="inputi";
                formaZaUnosNoveKartice.appendChild(input);
            }
            
        });
        ////////
        let radioButtons=document.createElement("div");//kontejner za radio buttone
        radioButtons.className="radioButtonsClass";
        let radioOpcije=["Silver(10%)","Gold(20%)","Platinum(30%)"];
        radioOpcije.forEach(el=>{
            let labelaRadio=document.createElement("label");
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