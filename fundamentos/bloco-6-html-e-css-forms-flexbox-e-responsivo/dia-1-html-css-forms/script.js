const estado = document.querySelector('#estado');
/* console.log(estado); */
const estados = [
	'Acre',
    'Alagoas',
	'Amapá',
	'Amazonas',
	'Bahia',
	'Ceará',
	'Distrito Federal',
	'Espirito Santo',
	'Goiás',
	'Maranhão',
	'Mato Grosso do Sul',
	'Mato Grosso',
	'Minas Gerais',
	'Pará',
	'Paraíba',
	'Paraná',
	'Pernambuco',
	'Piauí',
	'Rio de Janeiro',
	'Rio Grande do Norte',
	'Rio Grande do Sul',
	'Rondônia',
	'Roraima',
	'Santa Catarina',
	'São Paulo',
	'Sergipe',
	'Tocantins',
];
const siglas = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]

for(let i = 0; i < estados.length; i++){
    let option = document.createElement('option');
    option.text = estados[i];
    option.value = siglas[i];
    estado.appendChild(option);
}

const button = document.querySelector('#button');
const nameUser = document.querySelector('#nome');
const emailUser = document.querySelector('#e-mail');
const cpfUser = document.querySelector('#cpf');
const enderecoUser = document.querySelector('#endereco');
const cidade = document.querySelector('#cidade');
const estadoUser = document.querySelector('#estado');
const moradaUser = document.querySelector('#morada');
const resumoUser = document.querySelector('#resumo');
const cargosUser = document.querySelector('#cargo');
const descricaoCargoUser = document.querySelector('#descricao');
const dateInicioUser = document.querySelector('#data_inicio');

const div = document.querySelector('#resultado')
const paragraph = document.querySelector('#p')
const p = document.createElement('p');


function getUserValue(event){

    event.preventDefault();
    const user = {
    nome: nameUser.value,
    email: emailUser.value,
    cpf: cpfUser.value,
    endereco: enderecoUser.value,
    cidade: cidade.value,
    estado: estadoUser.value,
    morada: moradaUser.value,
    resumo: resumoUser.value,
    cargo: cargosUser.value,
    descricao: descricaoCargoUser.value,
    data: dateInicioUser.value,
    }

    for (dado in user){
         const p = document.createElement('p');
         p.innerHTML = `${dado}: ${user[dado]}`;
         console.log(p.textContent);
         div.append(p);
    }
}
const buttonClear = document.querySelector('#buttonClear');

function limpar(){
    div.innerHTML = '';
}

button.addEventListener('click', getUserValue);
buttonClear.addEventListener('click', limpar);