import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ultimo5anosComponent } from './ultimo5anos.component';

describe('Ultimo5anosComponent', () => {
  let component: Ultimo5anosComponent;
  let fixture: ComponentFixture<Ultimo5anosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ultimo5anosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ultimo5anosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
