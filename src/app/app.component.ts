import { Component, NgZone } from '@angular/core';
import { AppServiceService, LoaderEvent } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideLoader = true;
  modalMessage: string;

  constructor(private app: AppServiceService, private zone: NgZone) {
    this.app.loaderEvent.subscribe((data: LoaderEvent) => {
      console.log('app.loaderEvent', data);
      if(data.hideloader !== undefined) {
        this.hideLoader = data.hideloader;
      }
      if(data.message) {
        this.modalMessage = data.message;
      }
      if(this.hideLoader) {
        this.modalMessage = '';
      }
      console.log('this.hideLoader', this.hideLoader)
      this.zone.run(() => {});
    });
  }
}
