import { Component, NgZone } from '@angular/core';
import { AppServiceService, LoaderEvent, NoteEvent } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNotification = false;
  hideLoader = true;
  modalMessage: string;
  noteMessage: string;

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

    this.app.noteEvent.subscribe((status: NoteEvent) => {
      this.showNotification = status.show;
      this.noteMessage = status.message;
      if(this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 20000);
      }
    });
  }
}
