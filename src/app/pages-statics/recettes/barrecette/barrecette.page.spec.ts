import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarrecettePage } from './barrecette.page';

describe('BarrecettePage', () => {
  let component: BarrecettePage;
  let fixture: ComponentFixture<BarrecettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrecettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarrecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
