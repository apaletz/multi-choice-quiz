import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { QuestionComponent} from '../question/question.component';
import { Question } from '../question';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css', '../app.component.css']
})
export class SliderComponent implements OnInit {
  @Output()
  sliderScoreSender = new EventEmitter<number>();
  @Input()
  questionComponents: QuestionComponent[];
  @Input()
  questions: Question[];
  currentDisplayed = 0;

  constructor() { }

  ngOnInit(): void {
    // for (const question of this.questions){
    //   this.questionComponents.push(new QuestionComponent());
    // }
  }
  next(): void {
    this.currentDisplayed = ( this.currentDisplayed + 1 ) % this.questions.length;
  }
  prev(): void {
    this.currentDisplayed = (( this.currentDisplayed - 1 ) + 3) % this.questions.length;
  }

  sendScore(score: number): any {
    this.sliderScoreSender.emit(score);
  }
}
