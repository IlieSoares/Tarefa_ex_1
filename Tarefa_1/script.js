// Funções Puras e Impuras
function exemploFuncoesPurasImpuras() {
    const input = Number(document.getElementById('pure-impure-input').value);
  
    function puraSoma(a, b) {
      return a + b;
    }
  
    let contador = 0;
    function impuraSoma(a) {
      contador += a;
      return contador;
    }
  
    const resultadoPuro = puraSoma(input, 5);
    const resultadoImpuro = impuraSoma(input);
  
    document.getElementById('pure-impure-output').innerHTML = `
      <b>Resultado da Função Pura:</b> ${resultadoPuro}<br>
      <b>Resultado da Função Impura:</b> ${resultadoImpuro}<br>
      Explicação: A função pura sempre retorna o mesmo resultado para os mesmos argumentos. Já a função impura altera o estado (contador).`;
  }
  
  // Currying
  function exemploCurrying() {
    const input = document.getElementById('currying-input').value.split(',').map(Number);
    const [a, b] = input;
  
    function curriedAdd(a) {
      return function(b) {
        return a + b;
      };
    }
  
    const resultado = curriedAdd(a)(b);
    document.getElementById('currying-output').innerHTML = `
      <b>Resultado:</b> ${resultado}<br>
      Explicação: Currying transforma uma função de múltiplos argumentos em uma cadeia de funções que recebem um argumento de cada vez.`;
  }
  
  // Funções de Ordem Superior
  function exemploOrdemSuperior() {
    const input = document.getElementById('higher-order-input').value.split(',').map(Number);
  
    function aplicaTodos(arr, fn) {
      return arr.map(fn);
    }
  
    const resultado = aplicaTodos(input, num => num * 2);
    document.getElementById('higher-order-output').innerHTML = `
      <b>Array Duplicado:</b> ${resultado}<br>
      Explicação: Funções de ordem superior podem receber ou retornar outras funções.`;
  }
  
  // Closures
  function exemploClosure() {
    const base = Number(document.getElementById('closure-input').value);
  
    function multiplicador(x) {
      return function(y) {
        return x * y;
      };
    }
  
    const dobra = multiplicador(base);
    const resultado = dobra(2);
    document.getElementById('closure-output').innerHTML = `
      <b>Resultado:</b> ${resultado}<br>
      Explicação: Um closure é uma função que "lembra" do ambiente onde foi criada.`;
  }
  
  // Callbacks
  function exemploCallback() {
    const input = Number(document.getElementById('callback-input').value);
  
    function processaNumero(num, callback) {
      return callback(num);
    }
  
    const resultado = processaNumero(input, num => num * 3);
    document.getElementById('callback-output').innerHTML = `
      <b>Resultado:</b> ${resultado}<br>
      Explicação: Um callback é uma função passada como argumento para outra função.`;
  }
  
  // Imutabilidade
  function exemploImutabilidade() {
    const input = document.getElementById('immutability-input').value.split(',').map(Number);
  
    const adicionaImutavel = (arr, num) => [...arr, num];
  
    const resultado = adicionaImutavel(input, 10);
    document.getElementById('immutability-output').innerHTML = `
      <b>Original:</b> [${input}]<br>
      <b>Nova:</b> [${resultado}]<br>
      Explicação: Em programação funcional, objetos não devem ser alterados, mas sim criados novos.`;
  }
  
  // Deep Copy e Shallow Copy
  function exemploCopia() {
    const input = JSON.parse(document.getElementById('copy-input').value);
  
    const copiaRasa = { ...input };
    const copiaProfunda = JSON.parse(JSON.stringify(input));
  
    document.getElementById('copy-output').innerHTML = `
      <b>Cópia Rasa:</b> ${JSON.stringify(copiaRasa)}<br>
      <b>Cópia Profunda:</b> ${JSON.stringify(copiaProfunda)}<br>
      Explicação: A cópia rasa copia apenas o primeiro nível, enquanto a profunda copia todos os níveis do objeto.`;
  }
  