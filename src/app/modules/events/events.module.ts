import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list.component';
import { GraphQLModule } from '../../graphql.module';
import { EventsListService } from './services/events-list.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    EventsListComponent
  ],
  exports: [
    EventsListComponent
  ],
  imports: [
    CommonModule,
    GraphQLModule,
    NgxDatatableModule
  ],
  providers: [
    EventsListService
  ]
})
export class EventsModule { }
