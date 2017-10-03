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
  perguntas[1] = new Pergunta("Qual a diferença entre um integer e um float?","Nenhuma","Float serve para armazenar a parte inteira, enquanto o Integer serve para armazenar números com parte fracionária","Integer serve para armazenar a parte inteira, enquanto o Float serve para armazenar números com parte fracionária","O integer guarda números inteiros enquanto o float guarda apenas constante matemáticas como o pi",3);
  perguntas[2] = new Pergunta("Qual desses tipos de variáveis podem ser considerados um caso especial do array?","Character","Boolean","Integer e Float","String",4);
  perguntas[3] = new Pergunta("Quais as possibilidades de valores para uma variável do tipo boolean?","True ou False","Verdadeiro ou Mentira","Correto ou Falso","Sim ou Não",1);
  perguntas[4] = new Pergunta("Considere que existe um array de dez posições com todas elas preenchidas.O que irá acontecer caso o programador tente adicionar mais um elemento nesse array?","Nada, o programa irá adicionar normalmente", "Nada, pois ele substituirá o elemento na última posição", "Erro, pois só se pode adicionar elemento em um array vazio", "Erro, pois o array não pode ultrapassar seu tamanho depois de criado",4);
  perguntas[5] = new Pergunta("Quais são os tipos de variáveis que podem de armazenar uma letra do alfabeto?","String e Character","String e Float", "Boolean e Array","Array e Character",1);
  perguntas[6] = new Pergunta("Qual é o tipo de variável que resulta da adição entre um integer e um float?","Um Boolean","Um Array","Dois Integer","Um Float",4);
  perguntas[7] = new Pergunta("O sinal == representa qual operação lógica?","Comparação","Atribuição","Adição","Diferente",1);
  perguntas[8] = new Pergunta("Supondo que temos um integer a=3 e um float b=3.01.Qual é o resultado da expressão a>=b?","True","6.01","False","!=",3);
  perguntas[9] = new Pergunta("Supondo que temos dois integer, 16 e 3 qual é o resultado da divisão inteira entre esses dois números?","6","5","Erro, pois apenas é possível fazer divisões entre floats","Erro, pois o resultado da divisão entre dois integer deve obrigatoriamente ser um outro integer",2);
  perguntas[10] = new Pergunta("Em qual parte do computador ficam armazenados todos os dados que irão ser utilizados pelo computador?","Array","Processador","Boolean","Memória RAM",4);
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
