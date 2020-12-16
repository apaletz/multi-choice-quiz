import { Component, OnInit } from '@angular/core';
import { Question} from '../question';
import { QuestionComponent} from '../question/question.component';
import { QuestionService} from '../question.service';
import Utils from '../utils';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  submitted = false;
  questions: Question[];
  questionComponents: QuestionComponent[]
  score = 0;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(resp => {
      console.log(resp);
      console.log(resp.questions);
      this.questions = resp.questions;
      Utils.shuffle(this.questions);
    });

  }
  addToScoreTotal(questionScore: number): void{
    this.score += questionScore;
  }
  submit(): void {
    this.submitted = true;
  }
}
