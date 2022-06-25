import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersExxampleComponent } from './users-exxample.component';

describe('UsersExxampleComponent', () => {
  let component: UsersExxampleComponent;
  let fixture: ComponentFixture<UsersExxampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersExxampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersExxampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
