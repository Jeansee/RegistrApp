import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaritaPage } from './camarita.page';

describe('CamaritaPage', () => {
  let component: CamaritaPage;
  let fixture: ComponentFixture<CamaritaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamaritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
