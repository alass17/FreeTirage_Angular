import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPostulantsComponent } from './voir-postulants.component';

describe('VoirPostulantsComponent', () => {
  let component: VoirPostulantsComponent;
  let fixture: ComponentFixture<VoirPostulantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirPostulantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirPostulantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
