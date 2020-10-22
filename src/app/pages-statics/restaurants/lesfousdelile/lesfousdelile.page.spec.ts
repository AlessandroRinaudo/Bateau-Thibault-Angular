import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LesfousdelilePage } from './lesfousdelile.page';

describe('LesfousdelilePage', () => {
  let component: LesfousdelilePage;
  let fixture: ComponentFixture<LesfousdelilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesfousdelilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LesfousdelilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
