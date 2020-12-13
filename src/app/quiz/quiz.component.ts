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
  questions: Question[];
  questionComponents: QuestionComponent[]

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

}
