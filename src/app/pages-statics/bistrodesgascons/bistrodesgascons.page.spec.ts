import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrodesgasconsPage } from './bistrodesgascons.page';

describe('BistrodesgasconsPage', () => {
  let component: BistrodesgasconsPage;
  let fixture: ComponentFixture<BistrodesgasconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrodesgasconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrodesgasconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
