import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionText: string;
  answerOptions: string[];
  correctAnswer: string;
  correctIsSelected = false;
  @Input()
  inputTest: Question;

  constructor() { }

  ngOnInit(): void {
    this.questionText = this.inputTest.questionText;
    this.answerOptions = this.inputTest.options;
    this.correctAnswer = this.inputTest.correctAnswer;
  }
  checkSelection(selection): void {
    console.log('in the function');
    console.log(`The selected option is ${selection}`);
    console.log(`The correct option is ${this.correctAnswer}`);
    if (selection === this.correctAnswer){
      console.log('correct selected');
      this.correctIsSelected = true;
    }
    else{
      this.correctIsSelected = false;
    }
  }
}

/*
* Make quiz component
* Quiz is made of multiple questions
* Quiz receives questions from question service and maps them to question components
*
*
* */
