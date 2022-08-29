let arrayEstados = [];
let arrayPaises = [];
fillStates();
fillCountry();
fillDDI();
function resetInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type != 'button')
            input.value = '';
    });
};

function  findCEP(cep) {
    console.log('heguei aqui com', cep.target.value)
    const url = `http://viacep.com.br/ws/${cep.target.value}/json/`;
    if (isValidBRZip(cep.target.value)) {
        fetch(url).then((response) => response.json())
        .then(data => {
            console.log(data);
            findState(data.uf);
        })
        .catch(error => {
            console.error(error);
        });
    }
}

function isValidBRZip(zip) {
    return zip.includes('-') && zip.length == 9 || zip.length == 8 && !isNaN(+zip);
}

async function fillStates() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    const elementoEstados = document.querySelector('.estados');
    return fetch(url).then((resp) => {
        return resp.json();
    }).then((data) => {
        const estado = data;
        estado.forEach(item => {
            arrayEstados.push(item);
            let option = document.createElement('option');
            option.value = item.nome;
            option.innerHTML = item.nome;
            elementoEstados.appendChild(option);
        });
    })
    .catch(error => {
        console.error(error);
    });
}

async function fillCountry() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/paises/';
    fetch(url).then((resp) => resp.json()
    ).then(data => {
        const paises = data;
        const elementoPais = document.querySelector('.paises');
        paises.forEach(item => {
            arrayPaises.push(item);
            let pais = document.createElement('option');
            pais.value = item.nome.abreviado;
            pais.innerHTML = item.nome.abreviado;
            elementoPais.appendChild(pais);
        });
    })
    .catch(error => console.error(error));
}

function fillDDI() {
    const request = new XMLHttpRequest();
    request.open("GET","./ddi.json", false);
    request.send(null);
    const jsonData = JSON.parse(request.responseText);

    const elementoDDI = document.querySelector('.ddiPais');
    console.log(Object.values(jsonData));

    const array = Object.entries(jsonData);
    console.log(array);

    array.forEach(item => {
        let option = document.createElement('option');
        option.value = `(+${item[1].ddi}) ${item[1].pais}`;
        option.innerHTML = `(+${item[1].ddi}) ${item[1].pais}`;
        elementoDDI.appendChild(option);
    });
}

function findState(uf) {
    arrayEstados.forEach(estado => {
        if (estado.sigla === uf) {
            console.log(estado.sigla);
            document.querySelector('.estados').value = estado.nome;
        }
    })
}

function isNameValid(event) {
    const nome = event.target.value;
    const pattern = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`

    const result = pattern.split('').some(specialChar => {
        return nome.includes(specialChar)
    });

    return result;
}