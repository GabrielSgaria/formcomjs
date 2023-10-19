/*function enviar() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    //${nome}, ${sobrenome}, ${peso}, ${altura}

    res.innerHTML = `Nome: ${nome}, Sobrenome: ${sobrenome}, Peso: ${peso} e Altura: ${altura}`
}*/

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + `${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();