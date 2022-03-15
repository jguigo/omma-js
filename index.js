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
   let verificador = 0;
   receitas.forEach((e) => {
      if (id === e.id) {
         receitas.splice(receitas.indexOf(e), 1);
         verificador++;
      }
   })
   if(verificador>0){
      return console.log("Receita deletada com sucesso!\n\n"); 
   }
   console.log('Receita não encontrada!\n\n');
}

//buscar uma receita
const buscarReceita = termo => {
   console.log(`Palavra chave: "${termo}"`)
   const busca = receitas.filter(e => e.nome.includes(termo));
   busca.forEach(e => console.log(e.nome));
}

//atualizar receita
const atualizarReceita = (id, nome, dificuldade, ingredientes, preparo, link, vegan) => {
   let verificador = 0;
   receitas.forEach(e => {
      if(e.id === id){
         e.nome = nome;
         e.dificuldade = dificuldade;
         e.ingredientes = ingredientes;
         e.preparo = preparo;
         e.link = link;
         e.vegan = vegan;
         verificador++;
      }
   });
   if(verificador>0){
      return console.log(`Receita ${id} atualizada!\n\n`); 
   }
   console.log(`ID não encontrado!\n\n`);
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
