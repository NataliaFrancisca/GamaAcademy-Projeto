// pegar um input do usuário
// quer escolher a música pelo idioma


//Se a resposta for sim, mostrar os idiomas disponívei
//Pergunta qual catégoria que ela escolhe
//Se a resposta for não, mostrar todas as músicas em ordem alfabetica dos autores

const musicas = require('./database');
const readLine = require('readline-sync');


const entradaInicial = readLine.question('Deseja buscar uma musica? S/N ');


if(entradaInicial.toLocaleUpperCase() === 'S'){

	console.log('Esses são os idiomas disponiveis: ')
	console.log('Portugues ', 'Ingles ', 'Frances ', 'Italiano ', 'Coreano' ,'\n');

	const entradaCategoria = readLine.question('Qual idioma voce escolhe:');
	const retorno = musicas.filter(musica => musica.idioma === (entradaCategoria[0].toLocaleUpperCase() + entradaCategoria.substr(1)));

	console.table(retorno);

} else{

	const musicasOrdenadas = musicas.sort((a,b) => a.duracao - b.duracao);

	console.log("Essas são todas as músicas disponiveis: ")
	console.table(musicasOrdenadas);
}

