import { Component, OnInit } from '@angular/core';
import { Question} from '../question';
import { QuestionComponent} from '../question/question.component';
import { QuestionService} from '../question.service';

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

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }
  addToScoreTotal(questionScore: number): void{
    this.score += questionScore;
  }
  submit(): void {
    this.submitted = true;
  }
}
