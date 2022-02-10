const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// // Remova o primeiro valor de comidas e coloque em uma variável
// // Remova o último valor de comidas e coloque em uma variável
// // Adicione 'Arroz' ao final da array
// // Adicione 'Peixe' e 'Batata' ao início da array

const removePrimeiroValor = comidas.shift()
console.log(removePrimeiroValor)

const removeUltimoValor = comidas.pop()
console.log(removeUltimoValor)

comidas.push('Arroz')
console.log(comidas)

comidas.unshift('Peixe', 'Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// // Arrume os estudantes em ordem alfabética
// // Inverta a ordem dos estudantes
// // Verifique se Joana faz parte dos estudantes
// // Verifique se Juliana faz parte dos estudantes

estudantes.sort()
console.log(estudantes)

estudantes.reverse()
console.log(estudantes)

console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// // Substitua section por ul e div com li,
// // utilizando split e join

html = html.split('section').join('ul').split('div').join('li')

console.log(html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável

const cloneCarros = carros.slice()

carros.pop()
console.log(carros, cloneCarros)


// ====================================================================


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;

  console.log(curso)
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(objetoCursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresNumeros = numeros.filter((n) => n > 100)
console.log(maioresNumeros)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const possuiBaixo = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
})
console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((ac, i) => {
  const precoLimpo = +i.preco.replace('R$ ', '').replace(',', '.');
  return ac + precoLimpo
}, 0)

console.log(valorTotal)
