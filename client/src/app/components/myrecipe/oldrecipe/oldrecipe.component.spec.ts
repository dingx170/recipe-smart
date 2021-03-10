import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldrecipeComponent } from './oldrecipe.component';

describe('OldrecipeComponent', () => {
  let component: OldrecipeComponent;
  let fixture: ComponentFixture<OldrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldrecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
