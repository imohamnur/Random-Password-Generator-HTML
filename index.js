const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
text1El = document.getElementById("text-1")
text2El = document.getElementById("text-2")

function Generate() {
    text1El.textContent = ""
    text2El.textContent = ""
    for (let i = 0; i < 15; i++) {
        text1El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }

    for (let i = 0; i < 15; i++) {
        text2El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}