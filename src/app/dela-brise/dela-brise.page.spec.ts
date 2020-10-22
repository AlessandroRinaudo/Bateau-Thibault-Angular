import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelaBrisePage } from './dela-brise.page';

describe('DelaBrisePage', () => {
  let component: DelaBrisePage;
  let fixture: ComponentFixture<DelaBrisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaBrisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelaBrisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
