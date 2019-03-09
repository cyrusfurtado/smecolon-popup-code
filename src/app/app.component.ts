import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideLoader = false;

  constructor(private app: AppServiceService) {
    this.app.loaderEvent.subscribe((flag) => {
      this.hideLoader = flag;
    });
  }
}
