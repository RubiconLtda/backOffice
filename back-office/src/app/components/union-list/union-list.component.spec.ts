import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionListComponent } from './union-list.component';

describe('UnionListComponent', () => {
  let component: UnionListComponent;
  let fixture: ComponentFixture<UnionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
