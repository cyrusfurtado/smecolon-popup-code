import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-resumelist',
  templateUrl: './resumelist.component.html',
  styleUrls: ['./resumelist.component.scss']
})
export class ResumelistComponent implements OnInit {

  constructor(private app: AppServiceService) { }
  
  countTimer: any;
  ngOnInit() {
    // this.app.loaderEvent.emit({hideloader: true});
    // this.counter('start');

    // setTimeout(() => {
    //   this.counter('stop');
    // }, 62000);
  }

  counter(action: string) {
    if(action === 'start') {
      const start = new Date().getTime();

      const cb = () => {
        const now = new Date().getTime() - start;
  
        let hours: any = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins: any = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        let secs: any = Math.floor((now % (1000 * 60)) / 1000);
  
        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        secs =  secs < 10 ? '0' + secs : secs;
        console.log(hours + ':' + mins + ':' + secs);
        // console.log('now', now);
      };

      this.countTimer = setInterval(cb,1000);
    } else {
      clearInterval(this.countTimer);
    }
  }

}
