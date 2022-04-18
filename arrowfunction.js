const somaDeNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return ("Somente numeros de 1 a 9")
    }else {
        return num1 + num2;
    }
}