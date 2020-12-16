import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    constructor(private httpClient: HttpClient) { }

  questions = [
    {questionText: 'What games does Bapo play',
      options: ['Apex Legends', 'Don\'t Starve', 'Cuphead' ],
      correctAnswer: 'Don\'t Starve'},
    {questionText: 'What does Beacho want?',
      options: ['Sodie', 'Water', 'Juice' ],
      correctAnswer: 'Juice'},
    {
      questionText: 'Whesre does the Marquis De Carabas reside?',
      options: ['New York City', 'London Below', 'Paris France'],
      correctAnswer: 'London Below'
    }
  ]
  // getQuestions(): any {
  //   return this.questions;
  // }
  getQuestions(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/', {observe: 'body', responseType: 'json'});
  }
}
