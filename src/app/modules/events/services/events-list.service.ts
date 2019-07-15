import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export const EVENTS_LIST_QUERY = gql`
  query ListEventsFilter($filter: EventFilter){
    events: listEvents(filter: $filter) {
      id
      name
      description
      organiser {
        id
        name
        description
      }
      venue
      venue_location
      availability
      capacity
      type
      category
      status
      recurrence
      date
      image
      price
    }
  }`;

export interface Event {
  id?: number;
  name?: string;
  organiser?: any;
  description?: string;
  venue?: string;
  venue_location?: string;
  availability?: number;
  capacity?: number;
  type?: string;
  category?: string;
  status?: string;
  recurrence?: string;
  image?: string;
  date?: string;
  price?: number;
}

export interface Response {
  events: Event[];
}

export interface EventFilter {
  name?: string;
  organiser?: number;
  description?: string;
  venue?: string;
  venue_location?: string;
  availability?: number;
  capacity?: number;
  type?: string;
  category?: string;
  status?: string;
  recurrence?: string;
  date_from?: string;
  date_to?: string;
  price_from?: number;
  price_to?: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventsListService extends Query<Response> {
  document = EVENTS_LIST_QUERY;
}
