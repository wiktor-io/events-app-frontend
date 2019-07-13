import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export const EVENTS_LIST_QUERY = gql`
          {
            events: listEvents(filter: {}) {
              id
              name
              description
            }
          }`;

export interface Event {
  id: number;
  name: string;
  description: string;
}

export interface Response {
  events: Event[];
}

export interface Variables {
  filter: {};
}

@Injectable({
  providedIn: 'root'
})
export class EventsListService extends Query<Response> {
  document = EVENTS_LIST_QUERY;
}
