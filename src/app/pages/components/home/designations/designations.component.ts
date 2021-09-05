import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/pages/services/data.service';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class DesignationsComponent implements OnInit {

  destinations: any;
  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    }
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.showDesignations();
  }

  showDesignations() {
    this.dataService.getDesignations().subscribe(res => {
      this.destinations = res.result;
    });
  }

}
