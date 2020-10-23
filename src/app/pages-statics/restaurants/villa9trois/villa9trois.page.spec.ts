import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Villa9troisPage } from './villa9trois.page';

describe('Villa9troisPage', () => {
  let component: Villa9troisPage;
  let fixture: ComponentFixture<Villa9troisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Villa9troisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Villa9troisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
