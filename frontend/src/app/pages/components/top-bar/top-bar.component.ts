import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SmartSpeakerService } from 'src/app/global/services/smart-speaker/smart-speaker.service';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  searchQuery = '';
  voiceQuery = '';
  private isRecording = false;

  constructor(private router: Router,private smartSpeakerService: SmartSpeakerService) {}

  ngOnInit() {
    this.smartSpeakerService.initialize();
    this.smartSpeakerService.addCommand("search for *", (spokenText: string) => {
      this.voiceQuery = spokenText.split('search for ')[1];
    });
  }

  onVoiceButtonClick() {
    if (this.isRecording) {
      this.smartSpeakerService.stop();
      this.isRecording = false;
      this.router.navigate(['/search_result'], { queryParams: { query: this.voiceQuery } });
    } else {
      this.smartSpeakerService.start();
      this.isRecording = true;
      this.smartSpeakerService.addCommand("search for *", (spokenText: string) => {
        this.voiceQuery = spokenText.split('search for ')[1];
      });
    }
  }

  onSearch(): void {
    this.router.navigate(['/search_result'], { queryParams: { query: this.searchQuery } });
  }
}
