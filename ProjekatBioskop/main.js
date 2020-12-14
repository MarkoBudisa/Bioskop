import{projekcija} from "./projekcija.js"
import{kartica} from "./kartica.js"

const mainKontejner=document.createElement("div");//kontejner za forme
mainKontejner.className="kontejner";


//na pocetnom ekranu sa leve strane stoji forma za dodavanje sale(projekcije)
//u sredini napravim naziv bioskopa i sredim ga(u odnosu 1:2:1 na ostale elemente)
//sa skroz desne strane stoji formular za karticu koji ce da ide na server posle
//moramo da proverimo tipove za sve elemente koji su uneti
//da pokrijem svaki moguci scenario

let formaZaProjekciju=new projekcija();
let formaZaKarticu=new kartica();

formaZaProjekciju.crtajFormuZaNovuProjekciju(mainKontejner);

formaZaKarticu.crtajUnosZaNovuKarticu(mainKontejner);

document.body.appendChild(mainKontejner);

let pomKont=document.createElement("div");
pomKont.className="pomKont";
document.body.appendChild(pomKont);

