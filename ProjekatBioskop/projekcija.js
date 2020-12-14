import {sala} from "./sala.js"
export class projekcija{
    constructor()
    {
        let takeHost;
        this.sala=null;
        this.sale=[];
    }
    crtajFormuZaNovuProjekciju(host)//host je ovde body
    {   
        this.takeHost=host;
        const formaZaUnosProjekcije=document.createElement("div");//kontejner za formu za projekciju
        formaZaUnosProjekcije.className="forme";
        this.kontejner=formaZaUnosProjekcije;
        host.appendChild(formaZaUnosProjekcije);

        let elementiForme=["Ime filma","Datum projekcije","Vreme projekcije","Cena karte","Sala br.","Velicina sale"];

        let nizNizova=[];
        elementiForme.forEach((el)=>{
            let labela=document.createElement("label");
            labela.innerHTML=el;
            labela.className="labele"//klasa za labele za formu za projekcije
            formaZaUnosProjekcije.appendChild(labela);
            if(el!="Velicina sale")
            {
                let input=document.createElement("input");//input za elemente za projekciju
                input.className="inputi";
                input.required=true;
                nizNizova.push(input);
                formaZaUnosProjekcije.appendChild(input);
            }
        });
        /////////
        let velicine=document.createElement("div");//kontejner za velicine

        let inputX=document.createElement("input");
        inputX.type="number";
        inputX.required=true;
        inputX.classList="inputVelicina";
        nizNizova.push(inputX);
        velicine.appendChild(inputX);

        let inputY=document.createElement("input");
        inputY.type="number";
        inputY.required=true;
        inputY.className="inputVelicina"
        nizNizova.push(inputY)
        velicine.appendChild(inputY);

        formaZaUnosProjekcije.appendChild(velicine);//dugme za dodavanje bioskopa
        ////////

        let buttonDodaj=document.createElement("button");
        buttonDodaj.innerHTML="Dodaj";
        buttonDodaj.className="btnDodaj";
        
        buttonDodaj.onclick=(ev)=>{
        let pomoocna=1;
        let pomocna7=1;
            nizNizova.forEach(el=>{

                if(el.value=="")
                {
                    pomoocna=2;
                }
            })
            if(inputX.value < 1 || inputX.value > 15 || inputY.value < 1 || inputY.value > 15)
                {
                    
                    pomocna7=2;
                } 
               if(pomoocna==1)  {
            if(pomocna7==1)
            {
                this.sala=new sala(nizNizova[0].value,nizNizova[1].value,nizNizova[2].value,nizNizova[3].value,nizNizova[4].value,nizNizova[5].value,nizNizova[6].value);
                this.sale.push(sala);
                this.sala.crtajSalu(document.body);
                nizNizova.forEach(el=>{
                    el.value="";
                })
            }
            else
                {
                    alert("Neregularna vrednost za velicinu sale");   
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