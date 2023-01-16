import { Component } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_4_Angular_Services_And_Dependency_Injection';
  message: string;


  constructor(private MessageServiceService: MessageServiceService) {
    this.message = this.MessageServiceService.getMessage();
  }
}
