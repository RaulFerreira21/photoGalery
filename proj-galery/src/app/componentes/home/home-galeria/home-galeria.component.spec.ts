import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGaleriaComponent } from './home-galeria.component';

describe('HomeGaleriaComponent', () => {
  let component: HomeGaleriaComponent;
  let fixture: ComponentFixture<HomeGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
