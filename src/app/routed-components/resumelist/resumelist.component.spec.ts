import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumelistComponent } from './resumelist.component';

describe('ResumelistComponent', () => {
  let component: ResumelistComponent;
  let fixture: ComponentFixture<ResumelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
