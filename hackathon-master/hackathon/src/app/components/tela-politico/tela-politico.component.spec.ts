import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPoliticoComponent } from './tela-politico.component';

describe('TelaPoliticoComponent', () => {
  let component: TelaPoliticoComponent;
  let fixture: ComponentFixture<TelaPoliticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPoliticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPoliticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
