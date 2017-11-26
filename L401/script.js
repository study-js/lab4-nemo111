var numbers = [];

function minimal (pirveli,meore,mesame){
    var pirveli = prompt("პირველი რიცხვი: ");
    var meore = prompt("მეორე რიცხვი: ");
    var mesame = prompt("მესამე რიცხვი: ");

    var result = pirveli;

    if (meore < result) result = meore;
    if (mesame < result) result = mesame;
    return result;    
}


document.write(minimal());