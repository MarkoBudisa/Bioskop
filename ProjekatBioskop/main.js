import{projekcija} from "./projekcija.js"
import{sala} from "./sala.js"
import{kartica} from "./kartica.js"

const kontejnerZaForme = document.createElement("div");/*kontejner za forme*/
kontejnerZaForme.className = "kontejner";

let formaZaProjekciju = new projekcija();
let formaZaKarticu = new kartica();

formaZaProjekciju.crtajFormuZaNovuProjekciju(kontejnerZaForme);
formaZaKarticu.crtajUnosZaNovuKarticu(kontejnerZaForme);

document.body.appendChild(kontejnerZaForme);

fetch("https://localhost:5001/Bioskop/PreuzmiSale").then(p => {
    p.json().then(data => {
        data.forEach(salaa => {
            var salaPrava=new sala(salaa.id,salaa.nazivFilma,salaa.datumProjekcije,salaa.vremeProjekcije,salaa.cenaKarte,salaa.brojSale,salaa.x,salaa.y,salaa.nizSedista);
            formaZaProjekciju.pushSale(salaPrava);
            });
            formaZaProjekciju.sale.forEach(v=>{
                v.crtajSalu(document.body);
                v.oznaciZakupljenaSedista();
        });
    });
});


