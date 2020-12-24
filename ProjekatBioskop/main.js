import{projekcija} from "./projekcija.js"
import{kartica} from "./kartica.js"

const kontejnerZaForme = document.createElement("div");/*kontejner za forme*/
kontejnerZaForme.className = "kontejner";

let formaZaProjekciju = new projekcija();
let formaZaKarticu = new kartica();

formaZaProjekciju.crtajFormuZaNovuProjekciju(kontejnerZaForme);
formaZaKarticu.crtajUnosZaNovuKarticu(kontejnerZaForme);

document.body.appendChild(kontejnerZaForme);

//SREDITI KOD, IZKOMENTARISATI, PODELITI STA MOZE U POSEBNE FUNKCIJE I PODELITI IMPLEMENTACIJU KONSTRUKTORA
//I OSTALIH METODA
//VALIDACIJA PODATAKA U KODU

