let btnPhrases = document.querySelector('button')
let pPhrases = document.querySelector('p')

let phrases = [ 
  '"Eu te amo porque sua presença vale ouro."',
  '"Eu te amo porque você me faz bem."',
  '"Eu te amo porque você me apoia nos meus sonhos."',
  '"Eu te amo porque você sempre esteve comigo."',
  '"Eu te amo porque você me aprecia."',
  '"Uma das melhores lembraças é aquele dogão do calçadão de osasco"',
  '"Uma das melhores lembraças foi aquela vez que a enchente do Rochdale levou a gente"',
  '"Uma das melhores lembraças são sempre as que eu criei na minha mente sobre nós."',
  '"Shinedown - If You Only Knew"',
  '"Shinedown - I Will Follow You"',
  '"Killswitch Engage - The End Of Heartache"',
  '"Killswitch Engage - My Curse"',
  '"3 Doors Down - Here Without You"',
  '"All That Remains - What If I Was Nothing"',
  '"Disturbed - You are Mine"',
  '"Fresno - Diga, Parte 2"',
  '"Fresno - Acordar"',
  '"Fresno - Desde Quando Você se Foi"',
  '"One ok Rock - Wherever You Are"'
	
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