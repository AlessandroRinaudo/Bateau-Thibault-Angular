import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoquillagePage } from './coquillage.page';

describe('CoquillagePage', () => {
  let component: CoquillagePage;
  let fixture: ComponentFixture<CoquillagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquillagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoquillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
