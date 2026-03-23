// 1. Definējam klasi (obligāti jābūt faila augšgalā)
class Table {
constructor(Name, Price, Image) {
this.Name = Name;
this.Price = Price;
this.Image = Image;
}
}

// 2. Ielādējam esošos datus no localStorage vai izveidojam tukšu masīvu
const rr = JSON.parse(localStorage.getItem("tableData") || "[]");

// 3. Klausāmies pogas klikšķi
document.getElementById("xxx").addEventListener("click", () => {
const m = document.getElementById("name").value.trim();
const d = document.getElementById("avg").value.trim();
const imgInput = document.getElementById("imgg");
const file = imgInput.files[0];

// LOG: Debug līmenis - redzam, ko lietotājs ievadīja
console.debug("[DEBUG] Mēģinājums pievienot stilu:", { name: m, avg: d, fileSelected: !!file });

// Pārbaude, vai visi lauki ir aizpildīti
if (!m || !d || !file) {
// LOG: Warning līmenis
console.warn("[WARNING] Neaizpildīti lauki!");
alert("Please fill in all fields!");
return;
}

const reader = new FileReader();

// LOG: Error līmenis - ja neizdodas nolasīt failu
reader.onerror = () => {
console.error("[ERROR] Neizdevās nolasīt izvēlēto failu.");
};

reader.onloadend = () => {
try {
const imageBase64 = reader.result;

// Izveidojam jaunu objektu, izmantojot klasi
const p = new Table(m, d, imageBase64);

// Pievienojam masīvam un saglabājam
rr.push(p);
localStorage.setItem("tableData", JSON.stringify(rr));

// LOG: Info līmenis - veiksmīga darbība
console.info("[INFO] Jauns stils pievienots!", { styleName: m });

// Notīrām laukus
document.getElementById("name").value = "";
document.getElementById("avg").value = "";
document.getElementById("imgg").value = "";

// Parādām paziņojumu lietotājam
const msg = document.getElementById("message");
msg.style.display = "block";
setTimeout(() => { msg.style.display = "none"; }, 3000);

} catch (e) {
// LOG: Error līmenis - ja kļūda saglabājot (piem. localStorage pilns)
console.error("[ERROR] Sistēmas kļūda saglabājot:", e.message);
}
};

reader.readAsDataURL(file);
});
