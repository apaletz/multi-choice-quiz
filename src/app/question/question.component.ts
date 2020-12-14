import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
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
  firstTry = true;
  @Input()
  submitted: boolean;
  @Input()
  inputTest: Question;
  @Output()
  scoreEvent = new EventEmitter<number>()

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
    if (this.firstTry){
      this.firstTry = false;
      if (selection === this.correctAnswer){
        console.log('First try, correct selected');
        this.sendScore(1);
      }
      // else send a score of 0 (do nothing)
    }
    // if its not the first try (ie the answer is changed)
    else {
      if (this.correctIsSelected){
        if (selection !== this.correctAnswer){
          this.sendScore(-1);
          this.correctIsSelected = false;
        }
      }
      else {
        if (selection === this.correctAnswer){
          this.sendScore(1);
          this.correctIsSelected = true;
        }
      }
    }


    if (selection === this.correctAnswer){
      console.log('correct selected');
      this.correctIsSelected = true;
    }
    else{
      this.correctIsSelected = false;
    }

  }
  sendScore(score: number): any {
    this.scoreEvent.emit(score);
  }
}

/*
* Make quiz component
* Quiz is made of multiple questions
* Quiz receives questions from question service and maps them to question components
*
*
* */
