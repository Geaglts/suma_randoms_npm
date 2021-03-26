const generarNumero = () => {
    return Math.floor(Math.random() * 30);
};

function sumaRandoms() {
    const numero1 = generarNumero();
    const numero2 = generarNumero();
    const suma = numero1 + numero2;
    console.log(`${numero1} + ${numero2} = ${suma}`);
}

module.exports = { sumaRandoms };
