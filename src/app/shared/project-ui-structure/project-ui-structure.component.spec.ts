import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUiStructureComponent } from './project-ui-structure.component';

describe('ProjectUiStructureComponent', () => {
  let component: ProjectUiStructureComponent;
  let fixture: ComponentFixture<ProjectUiStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectUiStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUiStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
