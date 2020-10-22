import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastmicherPage } from './gastmicher.page';

describe('GastmicherPage', () => {
  let component: GastmicherPage;
  let fixture: ComponentFixture<GastmicherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastmicherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastmicherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
