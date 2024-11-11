var san1 = prompt("Birinshi sandy engiziniz")
var san2 = prompt("Ekinshi sandy engiziniz")
var san3 = prompt("Ushinshi sandy engiziniz")

if (san1 > san2 > san3) {
    alert("En ulken sanmen en kishi sannin aiyrlymy " + (san1-san3))
} else if(san1 < san2 < san3) {
    alert("En ulken sanmen en kishi sannin aiyrlymy " + (san3-san1))
} else if(san2 > san1 > san3) {
    alert("En ulken sanmen en kishi sannin aiyrlymy " + (san2-san3))
} 