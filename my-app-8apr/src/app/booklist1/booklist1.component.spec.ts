import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booklist1Component } from './booklist1.component';

describe('Booklist1Component', () => {
  let component: Booklist1Component;
  let fixture: ComponentFixture<Booklist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Booklist1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Booklist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
