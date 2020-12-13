export class sala
{
    constructor()
    {
        //ovde cemo da dodamo i parametre za konstruktor
        //tako da znamo da prenesemo informacije iz klase projekcija
        //matrica
        //ime filma
        //datum projekcije
        //vreme projekcije
        //cena karte
        //sala
        //this.kontejner=null;
    }
    crtajSalu(host)
    {
        const kontejnerFormaSala=document.createElement("div");//kontejner za bioskop
        this.kontejnerBioskopa=kontejnerFormaSala;
        kontejnerFormaSala.className="bioskop";
        host.appendChild(kontejnerFormaSala);

        let formaZaKartu=document.createElement("div");//forma za karu
        formaZaKartu.className="formaZaKartu1";
        kontejnerFormaSala.appendChild(formaZaKartu);

        let formaZaKartu2=document.createElement("div");
        formaZaKartu2.className="formaZaKartu";

        formaZaKartu.appendChild(formaZaKartu2);

        let sala=document.createElement("div");//sala
        sala.className="pravaSala"
        kontejnerFormaSala.appendChild(sala);


        for(let i=0;i<12;i++)
        {
            let red=document.createElement("div");
            red.className="red";
            for(let j=0;j<12;j++)
            {
                let sediste=document.createElement("div");
                sediste.className="sediste";
                sediste.innerHTML="12";
                sediste.onclick=ev=>{
                    sediste.innerHTML="21";
                }
                red.appendChild(sediste);
            }
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