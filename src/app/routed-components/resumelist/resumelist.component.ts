import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-resumelist',
  templateUrl: './resumelist.component.html',
  styleUrls: ['./resumelist.component.scss']
})
export class ResumelistComponent implements OnInit {

  constructor(private app: AppServiceService) { }

  ngOnInit() {
    this.app.loaderEvent.emit({hideloader: true});
  }

}
