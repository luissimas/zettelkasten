/*
  Tranfere a carta de uma pilha intermediária para a outra.
  Retorna `true` para sucesso e `false` para fracasso.
*/
bool transferecarta(pilha& origem, pilha& destino, carta& carta){
  bool desempilhaSuccess = false;
  bool empilhaSuccess = false;

  desempilha(origem, carta, desempilhaSuccess);

  if(desempilhaSuccess){
    empilhaNaSequencia(destino, carta, empilhaSuccess);

    if(empilhaSuccess){
      return true
    }else{
      empilhaSempre(origem, carta)
    }
  }

  return false;
}
