import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SmartSpeakerService {
  private recognition: any;
  private commandSubject = new Subject<string>();
  public commands$ = this.commandSubject.asObservable();

  private isListening = true;

  constructor() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = true; // Keep listening even after command is recognized
    this.recognition.interimResults = false; // Don't return interim results

    this.recognition.onresult = (event: any) => {
      const command = event.results[event.results.length - 1][0].transcript.trim();
      console.log("Command given: " + command);
      this.commandSubject.next(command);
    };

    this.recognition.onend = () => {
        if (this.isListening) {
          this.recognition.start();
        }
    };
  }

  public start() {
    this.isListening = true;
    this.recognition.start();
  }

  public stop() {
    this.isListening = false;
    this.recognition.stop();
  }

  public speak(text: string, callback?: Function) {
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = speechSynthesis.getVoices()[0];
    utterance.rate = 1;
    utterance.onerror = (event: any) => {
      console.log(event);
    };
    speechSynthesis.speak(utterance);
    if(callback) {
      callback();
    }
  }
}
