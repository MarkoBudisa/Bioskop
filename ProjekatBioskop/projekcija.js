import {sala} from "./sala.js"
export class projekcija{
    constructor()
    {
        //ovde cemo da imamo objekat klase sedista
        /*this.kontejner=null;
        this.imeFilma=null;
        this.sala=null;
        this.datProjekcije=null;
        this.vremeProjekcije=null;
        this.velSaleX=null;
        this.velSaleY=null;
        this.cenaKarte=null;*/
        let takeHost;
        this.sala=new sala();
    }
    crtajFormuZaNovuProjekciju(host)//host je ovde body
    {   
        this.takeHost=host;
        const formaZaUnosProjekcije=document.createElement("div");//kontejner za formu za projekciju
        formaZaUnosProjekcije.className="forme";
        this.kontejner=formaZaUnosProjekcije;
        host.appendChild(formaZaUnosProjekcije);

        let elementiForme=["Ime filma","Datum projekcije","Vreme projekcije","Cena karte","Sala","Velicina sale"];

        elementiForme.forEach((el)=>{
            let labela=document.createElement("label");
            labela.innerHTML=el;
            labela.className="labele"//klasa za labele za formu za projekcije
            formaZaUnosProjekcije.appendChild(labela);
            if(el!="Velicina sale")
            {
                let input=document.createElement("input");//input za elemente za projekciju
                input.className="inputi";
                formaZaUnosProjekcije.appendChild(input);
            }
        });
        /////////
        let velicine=document.createElement("div");//kontejner za velicine

        let inputX=document.createElement("input");
        inputX.type="number";
        inputX.classList="inputVelicina";
        velicine.appendChild(inputX);

        let inputY=document.createElement("input");
        inputY.type="number";
        inputY.className="inputVelicina"
        velicine.appendChild(inputY);

        formaZaUnosProjekcije.appendChild(velicine);//dugme za dodavanje bioskopa
        ////////

        let buttonDodaj=document.createElement("button");
        buttonDodaj.innerHTML="Dodaj";
        buttonDodaj.className="btnDodaj";
        buttonDodaj.onclick=(ev)=>{
            this.sala.crtajSalu(document.body);
        }
        formaZaUnosProjekcije.appendChild(buttonDodaj);
    }

}