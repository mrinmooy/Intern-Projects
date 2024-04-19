import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewALLComponent } from './view-all.component';

describe('ViewALLComponent', () => {
  let component: ViewALLComponent;
  let fixture: ComponentFixture<ViewALLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewALLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewALLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
