import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsmoderzComponent } from './postsmoderz.component';

describe('PostsmoderzComponent', () => {
  let component: PostsmoderzComponent;
  let fixture: ComponentFixture<PostsmoderzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsmoderzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsmoderzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
