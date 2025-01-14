O objetivo desse exercício é criar um componente funcional que renderize um campo de entrada de texto e um botão. Quando o botão for clicado, o campo de entrada deve automaticamente receber o foco, permitindo que o usuário possa começar a digitar sem ter que clicar no campo manualmente.

Explicação do funcionamento:
Referência ao elemento de entrada: Utilizamos o hook useRef para criar uma referência ao campo de entrada (input). A referência permite que possamos acessar diretamente o elemento do DOM e manipular suas propriedades ou métodos.

Foco no campo de entrada: Dentro de uma função, utilizamos o método focus() para colocar o foco no campo de entrada. Esse método é nativo do JavaScript e pode ser chamado diretamente em um elemento HTML, permitindo que ele ganhe o foco de interação.

Botão para ativar o foco: Quando o botão é clicado, ele chama a função responsável por colocar o foco no input, fazendo com que o campo se torne ativo e o usuário possa começar a digitar imediatamente.

Componente:
Esse componente pode ser utilizado em diversas situações onde você deseja que um campo de entrada receba foco automaticamente após uma ação do usuário (como clicar em um botão), facilitando a interação com o formulário.

Exercício 2: Controlando um Cronômetro
Objetivo:
O objetivo desse exercício é criar um cronômetro simples que conta os segundos e oferece botões para iniciar, pausar e resetar o cronômetro. O controle é feito utilizando o hook useRef para armazenar a referência do intervalo que atualiza o contador de segundos.

Explicação do funcionamento:
Contagem de segundos: Usamos o hook useState para armazenar o valor do contador de segundos. Toda vez que o cronômetro é iniciado, o contador é incrementado a cada segundo.

setInterval e clearInterval: Para fazer a contagem dos segundos, utilizamos a função setInterval, que executa uma ação repetidamente a cada intervalo de tempo (1 segundo, por exemplo). Para parar a contagem, usamos a função clearInterval para limpar o intervalo.

Referência ao setInterval: Usamos o useRef para armazenar a referência ao intervalo, garantindo que possamos parar ou limpar o intervalo corretamente ao pausar ou resetar o cronômetro.

Controles de iniciar, pausar e resetar:

Iniciar: Quando o botão de iniciar é clicado, o cronômetro começa a contar.
Pausar: Ao pausar, o intervalo de contagem é limpo e a contagem é interrompida.
Resetar: O cronômetro volta a zero e o intervalo é limpo.
Componente:
Esse componente é útil em situações onde você precisa de um cronômetro básico, como em jogos, temporizadores, ou monitoramento de tempo.

Exercício 3: Contexto de Tema (Claro e Escuro)
Objetivo:
Neste exercício, o objetivo é criar um contexto que gerencie o tema da aplicação (claro ou escuro). Você terá dois componentes: um que exibe o tema atual e outro que permite alternar entre os temas.

Explicação do funcionamento:
Criação do contexto: Usamos o createContext para criar um contexto global que armazena o estado do tema. O contexto permite que diferentes componentes compartilhem esse estado sem a necessidade de passá-lo explicitamente como props.

Gerenciamento do tema: Usamos o useState dentro de um provedor de contexto (TemaProvider) para controlar o estado do tema. Esse estado pode ser alternado entre "claro" e "escuro".

Alterando o tema: Um dos componentes permite alternar entre os temas. Quando o usuário clica no botão para alternar, a função de alternância altera o estado do tema, e todos os componentes que consomem esse contexto são atualizados automaticamente.

Acesso ao contexto com useContext: Dentro dos componentes que precisam acessar o tema, usamos o useContext para consumir o contexto. Dessa forma, os componentes podem exibir o tema atual ou modificar o estado do tema, conforme necessário.

Componente:
Esse componente pode ser útil em qualquer aplicação que deseje fornecer a funcionalidade de alternância entre modos de tema (claro/escuro). Ele centraliza o gerenciamento do estado do tema, o que facilita a manutenção e alteração de tema na aplicação.