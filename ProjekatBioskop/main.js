import{projekcija} from "./projekcija.js"
import{kartica} from "./kartica.js"

const kontejnerZaForme=document.createElement("div");//kontejner za forme
kontejnerZaForme.className="kontejner";

let formaZaProjekciju=new projekcija();
let formaZaKarticu=new kartica();

formaZaProjekciju.crtajFormuZaNovuProjekciju(kontejnerZaForme);
formaZaKarticu.crtajUnosZaNovuKarticu(kontejnerZaForme);

document.body.appendChild(kontejnerZaForme);

