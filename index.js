const NOME_DA_EMPRESA = " ---------------> SISTEMA OMMA <---------------";
console.log(NOME_DA_EMPRESA);
console.log('-----------------------------------------------\n');
const receitas = [];
let id = 1;

function cadastrarReceita(
   nome,
   dificuldade,
   ingredientes,
   preparo,
   link,
   vegan
) {
   receitas.push({
      id,
      nome,
      dificuldade,
      ingredientes,
      preparo,
      link,
      vegan,
   });
   id++;
   console.log("Cadastro concluído\n");
   console.log('-----------------------------------------------\n')
}

function exibirReceitas(){
    for(let i = 0; i < receitas.length; i++){
        console.log(`Receita: ${receitas[i].nome}\n`);
        console.log(`Ingredientes: `)
        for(let j = 0; j<receitas[i].ingredientes.length; j++){
            console.log(`-> ${receitas[i].ingredientes[j]}`);
        }
        console.log(`\n Vegan: ${receitas[i].vegan}`)
        console.log('-----------------------------------------------\n')
    }
}

cadastrarReceita(
   "Risoto de Abóbora",
   "modereda",
   ["1/2 kg de abóbora tipo kabotchá", "2 xícaras (chá) de arroz arbóreo", "2 colheres (sopa) de manteiga sem sal"],
   "Coloca agua na panela, e joga tudo lá dentro",
   "https://www.youtube.com/watch?v=Mxc3RQE4yAg&feature=emb_title",
   true
);
cadastrarReceita(
   "Cachorro quente",
   "Simples",
   ["Pão de leite", "Salsicha", "Molhos", "Um monte de coisa boa"],
   "Pega o pão e joga tudo dentro",
   "youtube.com.br",
   false
);

exibirReceitas();