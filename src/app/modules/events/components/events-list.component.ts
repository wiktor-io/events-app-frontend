import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

const EVENTS_LIST_QUERY = gql`
          {
            events: listEvents(filter: {}) {
              id
              name
              description
            }
          }`;

interface Event {
  id: number;
  name: string;
  description: string;
}

interface Response {
  events: Event[];
}

interface Variables {
  filter: {};
}

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

class EventsListComponent implements OnInit {

  events$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  filter: Variables;

  constructor(private apollo: Apollo) {}

  ngOnInit() {

  }

  getEvents() {
    return this.apollo
      .watchQuery<Response, Variables>({
        query: EVENTS_LIST_QUERY,
        variables: this.filter
      })
      .valueChanges
      .pipe(shareReplay(1));
  }
}

export {EVENTS_LIST_QUERY, EventsListComponent};
