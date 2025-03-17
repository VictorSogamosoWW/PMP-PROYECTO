export function normalizarString (inputString: string): string{
    if (!inputString){
        console.log("String sin parsear, entraada nula o indefinida ")
        return '';
    }else{
        inputString = inputString.replace(/\s/g,'').toLocaleLowerCase();
    }
    return inputString;
}