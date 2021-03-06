import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AquilonPage } from './aquilon.page';

describe('AquilonPage', () => {
  let component: AquilonPage;
  let fixture: ComponentFixture<AquilonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquilonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AquilonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
