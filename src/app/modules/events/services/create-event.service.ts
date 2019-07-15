import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation } from 'apollo-angular';

export const CREATE_EVENT_QUERY = gql`
  mutation CreateEvent($input: EventInput!){
    event: createEvent(input: $input) {
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

@Injectable({
  providedIn: 'root'
})
export class CreateEventService extends Mutation {
  document = CREATE_EVENT_QUERY;
}
