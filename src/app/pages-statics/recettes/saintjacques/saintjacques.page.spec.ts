import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaintjacquesPage } from './saintjacques.page';

describe('SaintjacquesPage', () => {
  let component: SaintjacquesPage;
  let fixture: ComponentFixture<SaintjacquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintjacquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaintjacquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
