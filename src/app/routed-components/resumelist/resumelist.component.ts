import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';

export interface Resume  {
  resumeId: string,
  createdAt: string,
  title: string,
  firstName: string,
  lastName: string,
  dob: string,
  email: string,
  jobTitle: string,
  currentExp: number,
  key_skills: string,
  frameworks: string,
  certifications: string,
  qualifications: string,
  job_responsibilities: string,
  project: string,
  companies: string;
  preferedTag?: number;
  isActive?: boolean;
  call_status?: CallStatus
}

enum CallStatus { 
  pending = 'Pending',
  complete = 'Complete'
}

@Component({
  selector: 'app-resumelist',
  templateUrl: './resumelist.component.html',
  styleUrls: ['./resumelist.component.scss']
})
export class ResumelistComponent implements OnInit {
  resumes: Array<Resume>;
  naText = '--';
  selectedResume: Resume;
  callstatus = CallStatus;

  constructor(private app: AppServiceService) { }
  
  countTimer: any;
  ngOnInit() {
    // this.app.loaderEvent.emit({hideloader: true});
    // this.counter('start');

    // setTimeout(() => {
    //   this.counter('stop');
    // }, 62000);
    this.app.loaderEvent.emit({hideloader: false});
    this.app.getResumes().subscribe((data: Array<Resume>) => {
      console.log('getResumes', data);
      this.resumes = data;
      this.resumes.map((val: Resume) => {
        val.preferedTag = Math.floor(Math.random() * 4);
        val.call_status = CallStatus.pending;
        this.app.loaderEvent.emit({hideloader: true});
      });
    });
  }

  counterText: string = '00:00:00';
  counter(action: string) {
    this.counterText = '00:00:00';
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
        this.counterText = hours + ':' + mins + ':' + secs;
      };

      this.countTimer = setInterval(cb,1000);
    } else {
      clearInterval(this.countTimer);
    }
  }

  selectResume(resume: Resume) {
    resume.isActive = true;
    this.selectedResume = resume;
    this.counter('stop');
    this.counter('start');
  }

  onCallEnd() {
    this.selectedResume.isActive = false;
    this.selectedResume.call_status = CallStatus.complete;
    this.counter('stop');
  }
}
