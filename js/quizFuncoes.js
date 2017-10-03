class Pergunta{
  constructor(texto,alternativaA,alternativaB,alternativaC,alternativaD,resposta){
    this.texto = texto;
    this.alternativaA = alternativaA;
    this.alternativaB = alternativaB;
    this.alternativaC = alternativaC;
    this.alternativaD = alternativaD;
    this.resposta = resposta;
  }
}


var perguntas = new Pergunta();
var estado = 0, escolha = 0;
var ansBoxX1 = 216; //primeira coluna
var ansBoxX2 = 584; //segunda coluna
var ansBoxY1 = 360; //primeira linha
var ansBoxY2 = 498; //segunda coluna
var ansBoxWidth = 360;
var ansBoxHeight = 132;

function setup(){
    var canvas = createCanvas(800,600);
    rectMode(CENTER);
    canvas.parent('quiz-holder');

  perguntas[0] = new Pergunta("Você está pronto para começar o quiz?"," "," "," ","Sim",4);
  perguntas[1] = new Pergunta("O que significa a palavra escopo?","Um tipo de variável","Um tipo de estrutura condicional","O contexto no qual a variável foi criada","Um outro nome para os parâmetros de uma função",3);
  perguntas[2] = new Pergunta("Para que serve os parâmetros de uma função?","Para retornar valores ao programa principal","Para receber valores do programa principal","Para converter variaveis de um tipo para outro","Para fazer a função existir, pois sem ele não é possível ter uma funçâo",2);
  perguntas[3] = new Pergunta("Qual dessas estruturas são imprecindíveis para um função funcionar?","O retorno","Os parâmetros","O escopo","Nenhuma das alternativas",4);
  perguntas[4] = new Pergunta("Quais dessas estruturas de uma função serve respectivamente para receber e para enviar dados ao programa principal?","Os parâmetros e o retorno", "O retorno e os parâmetros", "Os parâmetros e o escopo", "Os parâmetros e a classe",1);
  perguntas[5] = new Pergunta("Como é chamado o paradigma de programação que têm como principal características a interação entre objetos?","Programação Estrutural","Programação Orientada a Objetos", "Programação Recursiva","Programação Estruturada a Objetos",2);
  perguntas[6] = new Pergunta("Como é chamado a estrutura utilizada para representar um conjunto de objetos com  característica semelhantes?","Turma","Classe","Array de Objetos","Subclasses",2);
  perguntas[7] = new Pergunta("Quais dessas estruturas o objeto adquire da classe ao ser instanceado?","Metodos e Funções","Atributos e Parâmetros","Escopo e Herança","Atributos e Metodos",2);
  perguntas[8] = new Pergunta("Qual a ligação entre uma subclasse e sua classe mãe?","A subclasse recebe os atributos e metodos da classe mãe, podendo modificar eles o quanto quiser","Ela recebe os atributos e metodos da classe mãe, mas não pode modifica-los, pois fazem parte da herança","Os objetos que foram instanciados pela classe mãe","O cordão umbilical",1);
  perguntas[9] = new Pergunta("A herança só ocorre entre:","Classe e Gênero","Subclasse e Objeto","Classe e Subclasse","Atributo e Metodo",3);
  perguntas[10] = new Pergunta("Considerando a existência de uma classe Pessoa, qual seriam os metodos e atributos, respectivamente, mais aproriados?","Métodos:Correr,Nadar,RG; Atributos:Altura,Largura,Roupa de Banho","Metodos:RG,CPF, Data de Nascimento; Atributos: Bleza, Bom humor, Carro zero","Metodos:Correr,Nadar,Andar de Bicicleta; Atributos:Idade, CPF,Cor do cabelo","Métodos:Espiar,Correr,Beleza; Atributos:Caneta, Lápis, Correr Rápido",3);
  perguntas[11] = new Pergunta("Parabéns, você terminou o quiz! Vá para a próxima parte ou então teste seus conhecimentos novamente"," "," "," ","Refazer o Quiz",4);
  noStroke();
}


function draw(){
  background(200,230,201);
  textSize(40);
  fill(46,125,50);
  rect(width/2,30,width,60);
  fill(255);
  text("codeLearn Quiz",15,40);
  if((estado>0)&&(estado<11)){
    textSize(28);
    text("Pergunta No: " + estado,570,40);
  }
  fill(51,105,30);
  rect(width/2,height/2,width*0.85,height*0.7);
  fill(129,199,132);
  if((estado>0)&&(estado<11)){
    rect(ansBoxX1,ansBoxY1,ansBoxWidth,ansBoxHeight);
    rect(ansBoxX2,ansBoxY1,ansBoxWidth,ansBoxHeight);
    rect(ansBoxX1,ansBoxY2,ansBoxWidth,ansBoxHeight);
  }
  rect(ansBoxX2,ansBoxY2,ansBoxWidth,ansBoxHeight);
  fill(255);
  textSize(28);
  text(perguntas[estado].texto,width/1.93,height/3.2,width*0.85,height*0.7);
  textSize(18);
  fill(0);
  textAlign(CENTER, CENTER);
  text(perguntas[estado].alternativaA,ansBoxX1, ansBoxY1,ansBoxWidth,ansBoxHeight);
  text(perguntas[estado].alternativaB,ansBoxX2, ansBoxY1,ansBoxWidth,ansBoxHeight);
  text(perguntas[estado].alternativaC,ansBoxX1, ansBoxY2,ansBoxWidth,ansBoxHeight);
  text(perguntas[estado].alternativaD,ansBoxX2, ansBoxY2,ansBoxWidth,ansBoxHeight);
  textAlign(LEFT,LEFT);
 }


 function mousePressed(){
  if((((((mouseX>(ansBoxX1-ansBoxWidth*0.5) && mouseX <ansBoxX1+ansBoxWidth*0.5)&&(mouseY>(ansBoxY1-ansBoxHeight*0.5) && mouseY<ansBoxY1+ansBoxHeight*0.5))&&(perguntas[estado].resposta==1))||(((mouseX>(ansBoxX2-ansBoxWidth*0.5) && mouseX <ansBoxX2+ansBoxWidth*0.5)&&(mouseY>(ansBoxY1-ansBoxHeight*0.5) && mouseY<ansBoxY1+ansBoxHeight*0.5))&&(perguntas[estado].resposta==2)))||(((mouseX>(ansBoxX1-ansBoxWidth*0.5) && mouseX <ansBoxX1+ansBoxWidth*0.5)&&(mouseY>(ansBoxY2-ansBoxHeight*0.5) && mouseY<ansBoxY2+ansBoxHeight*0.5))&&(perguntas[estado].resposta==3)))||(((mouseX>(ansBoxX2-ansBoxWidth*0.5) && mouseX <ansBoxX2+ansBoxWidth*0.5)&&(mouseY>(ansBoxY2-ansBoxHeight*0.5) && mouseY<ansBoxY2+ansBoxHeight*0.5))&&(perguntas[estado].resposta==4))){ //Hitbox para (1,1)
     if (estado<11)
        estado++;
      else
        estado =0;
   }
 }
