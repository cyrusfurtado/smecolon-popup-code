import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtcampComponent } from './extcamp.component';

describe('ExtcampComponent', () => {
  let component: ExtcampComponent;
  let fixture: ComponentFixture<ExtcampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtcampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
