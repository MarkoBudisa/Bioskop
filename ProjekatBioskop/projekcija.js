import {sala} from "./sala.js"
export class projekcija{
    constructor()
    {
        this.takeHost=null;
        this.kontejner=null;
        this.sala=null;
        this.sale=[];
        this.counterBioskopa=0;
    }

    /*F-JA ZA CRTANJE PROJEKCIJE*/
    crtajFormuZaNovuProjekciju(host)//host je ovde kontejnerZaForme
    {   
        /*---------------------------------------------------------------*/

        let kontejnerZaBioskope=document.createElement("div");
        kontejnerZaBioskope.className="kontejnerZaBioskope";

        /*---------------------------------------------------------------*/

        this.takeHost=host;

        /*---------------------------------------------------------------*/

        const formaZaUnosProjekcije=document.createElement("div");//Kontejner za formu za projekciju
        formaZaUnosProjekcije.className="forme";//Stil za formu
        this.kontejner=formaZaUnosProjekcije;
        host.appendChild(formaZaUnosProjekcije);

        let labelaNaslov=document.createElement("h3");//Naslov forme za unos projekcije
        labelaNaslov.innerHTML="Dodavanje nove projekcije";
        labelaNaslov.className="labelaNaslov";//Stil za naslov forme za unos projekcije
        formaZaUnosProjekcije.appendChild(labelaNaslov);

        /*Elemnti na formi*/
        let elementiForme=["Ime filma","Datum projekcije","Vreme projekcije","Cena karte (RSD)","Sala br.","Velicina sale"];

        /*---------------------------------------------------------------*/

        let kontejnerDatum=document.createElement("div");//Kontejner za labelu datum i datum unos
        kontejnerDatum.className="kontejnerDatum";

        let datum=document.createElement("input");//Input datum
        datum.className="datum";
        datum.type="date";

        /*---------------------------------------------------------------*/

        let kontejnerVreme=document.createElement("div");//Kontejner za labelu vreme i vreme unos
        kontejnerVreme.className="kontejnerDatum";

        let vreme=document.createElement("input");//Input vreme
        vreme.className="datum";
        vreme.type="time";

        /*---------------------------------------------------------------*/

        let nizNizova=[];//Niz koji sluzi za elemente kad se salju bioksopskoj sali na obradu

        elementiForme.forEach((el)=>{/*Petlja koja pravi elemente na formi za projekciju(MOZDA I NE MORA!!!)*/ 
            
            
            
                let input=document.createElement("input");//input za elemente za projekciju
                input.classList="inputi";
                input.placeholder=el;
                nizNizova.push(input);
                formaZaUnosProjekcije.appendChild(input);
                if(el=="Velicina sale" )
                {
                    input.classList="inputi inputi1";
                    input.disabled=true;
                    nizNizova.pop();
                }
                else if( el=="Datum projekcije")
                {
                    input.classList="inputi inputi1";
                    input.disabled=true;
                    kontejnerDatum.appendChild(input);
                    kontejnerDatum.appendChild(datum);
                    nizNizova.pop();
                    nizNizova.push(datum);
                    formaZaUnosProjekcije.appendChild(kontejnerDatum);
                }
                else if(el=="Vreme projekcije")
                {
                    input.classList="inputi inputi1";
                    input.disabled=true;
                    kontejnerVreme.appendChild(input);
                    kontejnerVreme.appendChild(vreme);
                    nizNizova.pop();
                    nizNizova.push(vreme);
                    formaZaUnosProjekcije.appendChild(kontejnerVreme);
                }
                else if(el=="Cena karte (RSD)" || el=="Sala br.")
                {
                    input.type="number";
                }
            
            
        });
        /*---------------------------------------------------------------*/

        let kontejnerZaSelekcije=document.createElement("div");//Kontejner za velicine(selekcije)
        kontejnerZaSelekcije.className="kontejnerZaSelekcije";

        let selectY=document.createElement("select");//SelectOpcijaY
        selectY.className="select";

        let SelectX=document.createElement("select");//SelectOpcijaX
        SelectX.className="select";
        
        for(let vr=5 ; vr<13 ; vr++)//For petlja za ubacivanje elemenata u select
        {
            let option1=document.createElement("option");
            option1.value=vr;
            option1.text=vr;
            selectY.appendChild(option1);

            let option2=document.createElement("option");
            option2.value=vr;
            option2.text=vr;
            SelectX.appendChild(option2);
        }
        /*---------------------------------------------------------------*/

        kontejnerZaSelekcije.appendChild(SelectX);
        kontejnerZaSelekcije.appendChild(selectY);
        formaZaUnosProjekcije.appendChild(kontejnerZaSelekcije);

        /*---------------------------------------------------------------*/

        let buttonDodaj=document.createElement("button");//Dugme za dodavanje nove sale
        buttonDodaj.innerHTML="Dodaj";
        buttonDodaj.className="btnDodaj";
        
        /*---------------------------------------------------------------*/

        buttonDodaj.onclick=(ev)=>{/*Event handler za button*/
            let pomElProvera=1;//Pomocna za proveru unosa svih elemenata
            nizNizova.forEach(el=>{

            if(el.value=="")
            {
                pomElProvera=2;
            }
            })
            if(pomElProvera==1)  {

            /*---------------------------------------------------------------*/

            this.sala=new sala(nizNizova[0].value,datum.value,vreme.value,nizNizova[3].value,nizNizova[4].value,SelectX.value,selectY.value);
            this.sale.push(sala);//Niz sala(BUDUCA IMPLEMENTACIJA!!!)
            this.sala.crtajSalu(document.body);
            this.counterBioskopa++;//Counter za sale unutar kontejnera
            nizNizova.forEach(el=>{
                el.value="";
                selectY.value=1;
                SelectX.value=1;
                })
                
                }
                else
                {
                    alert("Niste uneli sve podatke");
                }
            }
        /*---------------------------------------------------------------*/
        formaZaUnosProjekcije.appendChild(buttonDodaj);//Dodamo button na formu projekcija
    
    }

}