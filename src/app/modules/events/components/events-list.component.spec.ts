import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent } from './events-list.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { EventsListService } from '../services/events-list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {DatatableComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let datatableStubComponent: DatatableComponent;
  let datatableStubComponentFixture: ComponentFixture<DatatableComponent>;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListComponent ],
      imports: [ ApolloTestingModule, NgxDatatableModule ],
      providers: [ EventsListService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    datatableStubComponentFixture = TestBed.createComponent(DatatableComponent);

    component = fixture.componentInstance;
    datatableStubComponent = datatableStubComponentFixture.componentInstance;

    fixture.detectChanges();
    datatableStubComponentFixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create datatable', () => {
    expect(datatableStubComponent).toBeTruthy();
  });
});
