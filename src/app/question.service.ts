import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
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
  getQuestions(): any {
    return this.questions;
  }

  constructor() { }
}
