import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiguosComponent } from './antiguos.component';

describe('AntiguosComponent', () => {
  let component: AntiguosComponent;
  let fixture: ComponentFixture<AntiguosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntiguosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntiguosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
