import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'services/destinations-service/destinations.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-destinations-details',
  templateUrl: './destinations-details.component.html',
  styleUrls: ['./destinations-details.component.css']
})
export class DestinationsDetailsComponent implements OnInit {
  id:any;

  constructor(private destinationsService:DestinationsService,
    private activatedRoute: ActivatedRoute) { 
       this.id = this.activatedRoute.snapshot.params['id'];
       console.log(this.id)
      
    }

  ngOnInit() {
    console.log(this.id)
    let dest = this.destinationsService.getDestinations();
       for(let d of dest){
         if(d.id === this.id){
           console.log('in')
         }
       }
  }
}
