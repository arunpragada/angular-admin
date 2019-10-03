import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicmoderzComponent } from './topicmoderz.component';

describe('TopicmoderzComponent', () => {
  let component: TopicmoderzComponent;
  let fixture: ComponentFixture<TopicmoderzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicmoderzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicmoderzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
