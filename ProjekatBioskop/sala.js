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
    crtajSalu(host)
    {
        const kontejnerFormaSala=document.createElement("div");//kontejner za bioskop
        this.kontejnerBioskopa=kontejnerFormaSala;
        kontejnerFormaSala.className="bioskop";
        host.appendChild(kontejnerFormaSala);


        
        let formaZaKartu=document.createElement("div");//forma za kartu
        formaZaKartu.className="kontejnerKartaInfo";
        kontejnerFormaSala.appendChild(formaZaKartu);

        let formaZaKartu2=document.createElement("div");
        formaZaKartu2.className="formaZaKartu";

        //IMPLEMENTIRATI FORMU ZA KUPOVINU KARTE

        let nizInformacije=["Sedista: ","Kartica: ","ID kartice","Kupi kartu"];
        let kontejnerSedista=document.createElement("div");
        let kontejnerRadioKartica=document.createElement("div");

        nizInformacije.forEach(el=>{
            if(el=="Sedista: ")
            {
                let labela1=document.createElement("label");
                labela1.innerHTML=el;
                kontejnerSedista.appendChild(labela1);
                formaZaKartu2.appendChild(kontejnerSedista);
            }
            else if(el=="Kartica: ")
            {
                let labela2=document.createElement("label");
                labela2.innerHTML=el;
                kontejnerRadioKartica.appendChild(labela2);
                formaZaKartu2.appendChild(kontejnerRadioKartica);
                let nizDaNe=["Da","Ne"];
                nizDaNe.forEach(el=>{
                    let labelaRadio=document.createElement("label");
                    labelaRadio.innerHTML=el;
                    kontejnerRadioKartica.appendChild(labelaRadio);
                    let radioButton=document.createElement("input");
                    radioButton.type="radio";
                    radioButton.value=el;
                    radioButton.name="radioGrupa2";
                    kontejnerRadioKartica.appendChild(radioButton);
                })
            }
            else if(el=="ID kartice")
            {
                let input2=document.createElement("input");
                input2.type="number";
                input2.placeholder=el;
                input2.disabled=true;
                formaZaKartu2.appendChild(input2);
            }
            else if(el=="Kupi kartu")
            {
                let btn=document.createElement("button");
                btn.innerHTML=el;
                formaZaKartu2.appendChild(btn);
            }
        })

        formaZaKartu.appendChild(formaZaKartu2);
        
        let kontejnerInfo=document.createElement("div");
        kontejnerInfo.className="kontejnerinfo";
        formaZaKartu.appendChild(kontejnerInfo);


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
        formaZaKartu.appendChild(buttonSala);

       


        let sala=document.createElement("div");//sala
        sala.className="pravaSala"
        kontejnerFormaSala.appendChild(sala);


        let nizOznakaSedista=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];
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
                sediste.onclick=ev=>{
                    sediste.innerHTML="21";
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