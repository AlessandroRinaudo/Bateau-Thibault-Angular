import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourteaulinguinePage } from './tourteaulinguine.page';

describe('TourteaulinguinePage', () => {
  let component: TourteaulinguinePage;
  let fixture: ComponentFixture<TourteaulinguinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourteaulinguinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourteaulinguinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
