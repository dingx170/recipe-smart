import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldplanComponent } from './oldplan.component';

describe('OldplanComponent', () => {
  let component: OldplanComponent;
  let fixture: ComponentFixture<OldplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
