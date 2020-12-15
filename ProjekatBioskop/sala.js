export class sala
{
    constructor(imeFilma,datumprojekcije,vremeProjekcije,cenaKarte,salaBr,velicinaSaleX,velicinaSaleY)
    {
        this.imeFilma=imeFilma;
        this.datumprojekcije=datumprojekcije;
        this.vremeProjekcije=vremeProjekcije;
        this.cenaKarte=cenaKarte;
        this.salaBr=salaBr;
        this.velicinaSaleX=velicinaSaleX;
        this.velicinaSaleY=velicinaSaleY;
        this.kontejnerBioskopa=null;
    }
    crtajSalu(host)//Host je kontejner za bioskope
    {
        const kontejnerFormaSala=document.createElement("div");//Kontejner za bioskop
        this.kontejnerBioskopa=kontejnerFormaSala;
        kontejnerFormaSala.className="bioskop";
        host.appendChild(kontejnerFormaSala);

        /*---------------------------------------------------------------*/

        let kontejnerKartaInfo=document.createElement("div");//Forma za kartu
        kontejnerKartaInfo.className="kontejnerKartaInfo";
        kontejnerFormaSala.appendChild(kontejnerKartaInfo);

        /*---------------------------------------------------------------*/

        let formaZaKupovinuKarte=document.createElement("div");
        formaZaKupovinuKarte.className="formaZaKartu";

        /*---------------------------------------------------------------*/

        let nizInformacije=["Sedista: ","Kartica: ","ID kartice","Kupi kartu"];//Elementi koji idu na formuza kupovinu karte

        let kontejnerSedista=document.createElement("div");//Kontejner za sedista,kada klikcemo na sedista da dodamo za kartu
        kontejnerSedista.className="kontejnerSedistaKarta";
        let input2;
        
        let kontejnerRadioKartica=document.createElement("div");//Kontejner za raddion buttons za novu kartu

        /*---------------------------------------------------------------*/

        nizInformacije.forEach(el=>{//Dodavanje elemenata na formu za novu kartu
            if(el=="Sedista: ")
            {
                let labela1=document.createElement("label");
                labela1.innerHTML=el;
                kontejnerSedista.appendChild(labela1);
                formaZaKupovinuKarte.appendChild(kontejnerSedista);
            }

            /*---------------------------------------------------------------*/

            else if(el=="Kartica: ")
            {
                let labela2=document.createElement("label");
                labela2.className="elInfoSala";
                labela2.innerHTML=el;
                kontejnerRadioKartica.appendChild(labela2);
                formaZaKupovinuKarte.appendChild(kontejnerRadioKartica);
                let nizDaNe=["Da"];
                nizDaNe.forEach(el=>{
                    let labelaCheckbox=document.createElement("label");
                    labelaCheckbox.innerHTML=el;
                    labelaCheckbox.className="elInfoSala";
                    kontejnerRadioKartica.appendChild(labelaCheckbox);
                    let checkBox=document.createElement("input");
                    checkBox.type="checkbox";
                    checkBox.onclick=ev=>{
                        if(checkBox.checked==false)
                        {
                            input2.disabled=true;
                        }
                        else
                        {
                            input2.disabled=false;
                        }

                    }
                    checkBox.value=el;
                    checkBox.name="radioGrupa2";
                    kontejnerRadioKartica.appendChild(checkBox);
                })
            }

            /*---------------------------------------------------------------*/

            else if(el=="ID kartice")
            {
                input2=document.createElement("input");
                input2.type="number";
                input2.className="input2";
                input2.placeholder=el;
                input2.disabled=true;
                formaZaKupovinuKarte.appendChild(input2);
            }

            /*---------------------------------------------------------------*/

            else if(el=="Kupi kartu")
            {
                let btn=document.createElement("button");
                btn.innerHTML=el;
                btn.classList="buttonSala btnKupi";
                formaZaKupovinuKarte.appendChild(btn);
            }
        })

        kontejnerKartaInfo.appendChild(formaZaKupovinuKarte);

        /*---------------------------------------------------------------*/
        
        let kontejnerInfo=document.createElement("div");
        kontejnerInfo.className="kontejnerinfo";
        kontejnerKartaInfo.appendChild(kontejnerInfo);


        let nizNaziv=["Ime filma: ","Datum projekcije: ","Vreme projekcije: ","Broj sale: ","Cena karte: "];
        let nizInfo=[this.imeFilma,this.datumprojekcije,this.vremeProjekcije,this.salaBr,this.cenaKarte];
        let ii=0;
        nizNaziv.forEach(el=>{
            let kanta=document.createElement("div");
            let naziv=document.createElement("label");
            let info=document.createElement("label");
            naziv.className="elInfoSala";
            info.className="elInfoSala";
            naziv.innerHTML=el;
            info.innerHTML=nizInfo[ii];
            ii++;
            kanta.appendChild(naziv);
            kanta.appendChild(info);
            kontejnerInfo.appendChild(kanta);

        })
        let buttonSala=document.createElement("button");
        buttonSala.className="buttonSala";
        buttonSala.innerHTML="Obriši Salu";
        kontejnerKartaInfo.appendChild(buttonSala);

        buttonSala.onclick=ev=>{
            host.removeChild(kontejnerFormaSala);
        }

        let sala=document.createElement("div");//sala
        sala.className="pravaSala"
        kontejnerFormaSala.appendChild(sala);


        let nizOznakaSedista=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];
        let nizSelektovanihSedista=[];
        let cntSlova=0;
        let cntBroja=1;
        for(let i=0;i<this.velicinaSaleX;i++)
        {
            cntBroja=1;
            let red=document.createElement("div");
            red.className="red";
            for(let j=0;j<this.velicinaSaleY;j++)
            {
                let sediste=document.createElement("div");
                sediste.className="sediste";
                sediste.innerHTML=nizOznakaSedista[cntSlova]+cntBroja;
                sediste.id="NotSelected";
                let labelaOznakaSedista;
                labelaOznakaSedista=document.createElement("label");
                labelaOznakaSedista.className="labelaOznakaSedista";
                labelaOznakaSedista.innerHTML=sediste.innerHTML;
                sediste.onclick=ev=>{
                    if(sediste.id=="Selected")
                    {
                        sediste.id="NotSelected";
                        kontejnerSedista.removeChild(labelaOznakaSedista);
                        sediste.style.backgroundColor="brown";
                        let pomInt=nizSelektovanihSedista.indexOf(labelaOznakaSedista);
                        nizSelektovanihSedista.splice(pomInt,1);
                        console.log(nizSelektovanihSedista);
                    }
                    else if(sediste.id=="NotSelected")
                    {
                        sediste.style.backgroundColor="darkred";
                        sediste.id="Selected";
                        kontejnerSedista.appendChild(labelaOznakaSedista);
                        nizSelektovanihSedista.push(labelaOznakaSedista);
                    }
                    
                }
                red.appendChild(sediste);
                cntBroja++;
            }
            cntSlova++;
            sala.appendChild(red);
        }
        
        //napravimo for da ubacije svako sediste kao div
        //i zatim svakom sedistu dodelimo istu klasu da bi mogli da ga sredimo posle u css
        //sala treba da ima odnos 3:1 u odnosu na formular za zakazivanje projekcije
        //po mogucnosti dodati mogucnost da klikom na sediste dodajemo kupcu za kartu
        //kad kliknemo na sediste koje je vec zauzeto alert
        //mozemo da seletujemo i da odselektujemo sediste
        //razmotriti nacin numerisanja sedista koji je najlaksi za uzimanje njegove pozicije

    }
}