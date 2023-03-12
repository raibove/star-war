export const convertToRoman = (number)=>{
    if(isNaN(number)){
        return "";
    }

    let digits = String(number).split(""),
    key = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 2;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return roman;
}