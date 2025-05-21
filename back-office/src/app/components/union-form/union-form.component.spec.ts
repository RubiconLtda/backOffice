import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionFormComponent } from './union-form.component';

describe('UnionFormComponent', () => {
  let component: UnionFormComponent;
  let fixture: ComponentFixture<UnionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
