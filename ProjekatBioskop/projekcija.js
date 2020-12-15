import {sala} from "./sala.js"
export class projekcija{
    constructor()
    {
        let takeHost;
        this.sala=null;
        this.sale=[];
        this.counterBioskopa=0;
    }
    crtajFormuZaNovuProjekciju(host)//host je ovde body
    {   
        let kontejnerZaBioskope=document.createElement("div");
        kontejnerZaBioskope.className="kontejnerZaBioskope";
        this.takeHost=host;
        const formaZaUnosProjekcije=document.createElement("div");//kontejner za formu za projekciju
        formaZaUnosProjekcije.className="forme";
        this.kontejner=formaZaUnosProjekcije;
        host.appendChild(formaZaUnosProjekcije);

        let labelaNaslov=document.createElement("h3");
        labelaNaslov.innerHTML="Dodavanje nove projekcije";
        labelaNaslov.className="labelaNaslov";
        formaZaUnosProjekcije.appendChild(labelaNaslov);

        let elementiForme=["Ime filma","Datum projekcije","Vreme projekcije","Cena karte (RSD)","Sala br.","Velicina sale"];

        let kontejnerDatum=document.createElement("div");
        kontejnerDatum.className="kontejnerDatum";

        let datum=document.createElement("input");
        datum.className="datum";
        datum.type="date";

        ///////////////////////////////
        let kontejnerVreme=document.createElement("div");
        kontejnerVreme.className="kontejnerDatum";

        let vreme=document.createElement("input");
        vreme.className="datum";
        vreme.type="time";
        //////////////////////////////////

        let nizNizova=[];
        elementiForme.forEach((el)=>{
            /*let labela=document.createElement("label");
            labela.innerHTML=el;
            labela.className="labele"//klasa za labele za formu za projekcije
            formaZaUnosProjekcije.appendChild(labela);*/
            
            
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
        /////////
        let velicine=document.createElement("div");//kontejner za velicine

        //let inputX=document.createElement("input");
        /*inputX.type="number";
        inputX.required=true;
        inputX.classList="inputVelicina";
        nizNizova.push(inputX);
        velicine.appendChild(inputX);*/

        //let inputY=document.createElement("input");
        /*inputY.type="number";
        inputY.required=true;
        inputY.className="inputVelicina"
        nizNizova.push(inputY)
        velicine.appendChild(inputY);*/

        //formaZaUnosProjekcije.appendChild(velicine);//dugme za dodavanje bioskopa
        ////////

        let kontejnerZaSelekcije=document.createElement("div");
        kontejnerZaSelekcije.className="kontejnerZaSelekcije";
        let select=document.createElement("select");
        select.className="select";
        for(let ss=1;ss<16;ss++)
        {
            let option=document.createElement("option");
            option.value=ss;
            option.text=ss;
            select.appendChild(option);
        }
        let select1=document.createElement("select");
        select1.className="select";
        for(let ss=1;ss<16;ss++)
        {
            let option=document.createElement("option");
            option.value=ss;
            option.text=ss;
            select1.appendChild(option);
        }
        kontejnerZaSelekcije.appendChild(select1);
        kontejnerZaSelekcije.appendChild(select);
        formaZaUnosProjekcije.appendChild(kontejnerZaSelekcije);

        let buttonDodaj=document.createElement("button");
        buttonDodaj.innerHTML="Dodaj";
        buttonDodaj.className="btnDodaj";
        
        buttonDodaj.onclick=(ev)=>{
        let pomoocna=1;
            nizNizova.forEach(el=>{

                if(el.value=="")
                {
                    pomoocna=2;
                }
            })
            if(pomoocna==1)  {
            this.sala=new sala(nizNizova[0].value,datum.value,vreme.value,nizNizova[3].value,nizNizova[4].value,select1.value,select.value);
            this.sale.push(sala);
            this.sala.crtajSalu(kontejnerZaBioskope);
            this.counterBioskopa++;
            nizNizova.forEach(el=>{
                el.value="";
                select.value=1;
                select1.value=1;
             })
             if(this.counterBioskopa==1)
             {
                document.body.appendChild(kontejnerZaBioskope);
             }
            if(this.counterBioskopa==2)
            {
                this.counterBioskopa=0;
                let noviKontejnerZaBioskope=document.createElement("div");
                noviKontejnerZaBioskope.className="kontejnerZaBioskope";
                kontejnerZaBioskope=noviKontejnerZaBioskope;
            }
            
            }
            else
            {
                alert("Niste uneli sve podatke");
            }
            }
        
        formaZaUnosProjekcije.appendChild(buttonDodaj);
    
    }

}