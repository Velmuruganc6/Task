import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/pages/services/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weathers: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.showWeather();
  }

  showWeather() {
    this.dataService.getWeather().subscribe(res => {
      this.weathers = res.result;
    });
  }

}
