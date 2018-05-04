import { Component } from '@angular/core';
import { SharedataService } from "./services/sharedata.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string;
  title = 'app';
}
