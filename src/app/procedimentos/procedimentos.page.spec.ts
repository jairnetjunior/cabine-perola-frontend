import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentosPage } from './procedimentos.page';

describe('ProcedimentosPage', () => {
  let component: ProcedimentosPage;
  let fixture: ComponentFixture<ProcedimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
