class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name....");
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    
    this.question.html("Question:- When was the first International yoga day celebrated? " );
   
    this.question.position(150, 100);
    this.option1.html("1: 1999 " );
    this.option1.position(150, 120);
    this.option2.html("2: 2000" );
    this.option2.position(150, 140);
    this.option3.html("3: 2015 " );
    this.option3.position(150, 160);
    this.option4.html("4: 1980" );
    this.option4.position(150, 180);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350, 350);

      
    });
  }
}
