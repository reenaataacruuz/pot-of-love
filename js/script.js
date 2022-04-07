let btnPhrases = document.querySelector('button')
let pPhrases = document.querySelector('p')

let phrases = [ 
  'Frase 1',
  'Frase 2',
  'Frase 3',
  'Frase 4',
  'Frase 5'
]

function loadPhrase(min, max){
  let step1 = max - min + 1
  let step2 = Math.random() * step1
  let pPhrases = Math.floor(step2) + min
  
  return pPhrases
}

btnPhrases.addEventListener('click',() => {
  let index = loadPhrase(0,phrases.length-1)
  pPhrases.innerText = phrases[index]
})