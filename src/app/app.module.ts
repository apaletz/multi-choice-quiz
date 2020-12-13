import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
