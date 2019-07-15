import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation } from 'apollo-angular';

export const UPDATE_EVENT_QUERY = gql`
  mutation UpdateEvent($id: ID!, $input: EventInput!){
    event: updateEvent(id: $id, input: $input) {
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
export class UpdateEventService extends Mutation {
  document = UPDATE_EVENT_QUERY;
}
