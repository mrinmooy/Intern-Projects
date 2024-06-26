import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneComponent } from './update-one.component';

describe('UpdateOneComponent', () => {
  let component: UpdateOneComponent;
  let fixture: ComponentFixture<UpdateOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
