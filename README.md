O objetivo dessa atividade é praticar o uso do hook useState em React para gerenciar o estado em componentes funcionais. Em três exercícios, criamos componentes para implementar funcionalidades como contadores, alternância de estados de texto e gerenciamento de listas de tarefas. A seguir, temos a documentação detalhada de cada exercício com a explicação dos blocos de código.

Exercício 1: Contador Simples com useState
Componente: Contador

Explicação do Componente:
O componente Contador exibe um número que começa em 0. Ele possui dois botões: um para incrementar (+1) e outro para decrementar (-1). O hook useState é utilizado para controlar o estado do número exibido.

Explicação dos Blocos de Código:
useState(0): Este hook inicializa o estado contador com o valor 0. O primeiro valor retornado pela função useState é o estado atual, e o segundo valor é a função que pode ser usada para atualizá-lo.
Função incrementar: Quando o botão de incremento é clicado, a função setContador é chamada para adicionar 1 ao valor atual do contador.
Função decrementar: Quando o botão de decremento é clicado, a função setContador é chamada para subtrair 1 do valor atual, mas apenas se o valor for maior que 0, para evitar que o número fique negativo.
Exercício 2: Alterando o Texto de um Botão
Componente: BotaoAlternador

Explicação do Componente:
O componente BotaoAlternador exibe um botão que alterna entre os textos "Ligado" e "Desligado". Utilizamos o hook useState para controlar o texto exibido, que alterna cada vez que o botão é clicado. O desafio extra inclui a estilização do botão com cores diferentes para cada estado.

Explicação dos Blocos de Código:
useState("Desligado"): Este hook inicializa o estado estado com o texto "Desligado".
Função alternarEstado: Cada vez que o botão é clicado, a função setEstado é chamada, alternando o valor do estado entre "Ligado" e "Desligado". Se o estado for "Ligado", ele muda para "Desligado", e vice-versa.
Classe CSS Dinâmica: A classe do botão é alterada dinamicamente com base no estado, usando a expressão className={estado === "Ligado" ? "ligado" : "desligado"}. Isso aplica diferentes estilos (cores) ao botão dependendo de seu estado.
CSS: O arquivo de estilo CSS define o fundo do botão como verde quando o estado é "Ligado" e vermelho quando é "Desligado", além de outros estilos de formatação.
Exercício 3: Gerenciando uma Lista de Tarefas
Componente: ListaDeTarefas

Explicação do Componente:
O componente ListaDeTarefas permite adicionar tarefas a uma lista, gerenciar o estado do valor digitado no campo de texto e a lista de tarefas. O desafio extra consiste em permitir a remoção de tarefas ao clicar nelas.

Explicação dos Blocos de Código:
useState(''): O primeiro hook useState inicializa o estado do campo de texto tarefa com uma string vazia, ou seja, o campo começa vazio.
useState([]): O segundo hook useState inicializa o estado da lista de tarefas tarefas com um array vazio. Este estado será atualizado conforme o usuário adicionar ou remover tarefas.
Função adicionarTarefa: Quando o botão "Adicionar" é clicado, a função setTarefas é chamada para adicionar a nova tarefa ao array de tarefas. Se o campo de texto não estiver vazio, o valor da tarefa é adicionado à lista e o campo de texto é limpo.
Função removerTarefa: Quando uma tarefa da lista é clicada, a função removerTarefa é chamada para remover a tarefa da lista. Isso é feito filtrando a tarefa clicada e atualizando o estado da lista.
Renderização da Lista de Tarefas: A lista de tarefas é renderizada com o método map, onde cada item da lista é exibido dentro de um elemento li. O evento onClick é associado a cada item para que a tarefa seja removida ao ser clicada.
Desafio Extra:
Exercício 1: No contador, a validação foi adicionada para impedir que o número fique negativo, restringindo a decretação apenas quando o valor for maior que 0.
Exercício 2: Foi incluída uma estilização para o botão, onde ele muda de cor dependendo do estado, com "Ligado" sendo exibido em verde e "Desligado" em vermelho.
Exercício 3: A funcionalidade de remoção de tarefas foi implementada. Agora, ao clicar em uma tarefa na lista, ela é removida da lista de tarefas.
