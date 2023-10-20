import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComidaPage } from './comida.page';

describe('ComidaPage', () => {
  let component: ComidaPage;
  let fixture: ComponentFixture<ComidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
