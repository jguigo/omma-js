const NOME_DA_EMPRESA = " ---------------> SISTEMA OMMA <---------------";
console.log(NOME_DA_EMPRESA);
console.log("-----------------------------------------------\n");
const receitas = [];
let id = 1;

//Fazer cadastro da receita por um "input"
const cadastrarReceita = (
   nome,
   dificuldade,
   ingredientes,
   preparo,
   link,
   vegan
) => {
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
   console.log("-----------------------------------------------\n");
};

//Exibir receitas
const exibirReceitas = () => {
   receitas.forEach((e) => {
      console.log(`Receita: ${e.nome}\n`);
      console.log("Ingredientes:");
      e.ingredientes.forEach((item) => console.log(`-> ${item}`));
      console.log(`\n'Vegan: ${e.vegan}`);
      console.log("\n-----------------------------------------------\n");
   });
};

//deletar um item pelo id
const deletarReceita = (id) => {
   let conta = 0;
   receitas.forEach((e) => {
      if (id === e.id) {
         receitas.splice(receitas.indexOf(e), 1);
         conta++;
      }
   })
   if(conta>0){
      return console.log("Receita deletada com sucesso!"); 
   }
   console.log('Receita não encontrada!');
}



cadastrarReceita(
   "Risoto de Abóbora",
   "modereda",
   [
      "1/2 kg de abóbora tipo kabotchá",
      "2 xícaras (chá) de arroz arbóreo",
      "2 colheres (sopa) de manteiga sem sal",
   ],
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
deletarReceita(2);
console.log(receitas);