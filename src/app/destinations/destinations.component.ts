import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'services/destinations-service/destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  destinations:any[]=[];

  constructor(private destinationsService:DestinationsService) { }

  ngOnInit() {
    this.destinations = this.destinationsService.getDestinations();
  }

}
