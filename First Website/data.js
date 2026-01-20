const nama = "Nouzen";
let umur = 17;

function sapaUser() {
    if(umur > 10 && umur <18) {
        console.log("anda remaja");
    } 
    else if (umur > 18 && umur < 30) {
        console.log("anda dewasa");
    }  
    else if (umur > 30)
        console.log("anda sudah tua");  
    else {
        console.log("anda anak-anak");
    }
}

console.log(nama);
console.log(umur); 

sapaUser(); 