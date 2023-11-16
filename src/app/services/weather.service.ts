import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url!: string;
  apiKey: string = 'cdf5225aaf13fcd194385d889a2169d8';
  
  
  constructor(private httpClient: HttpClient) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
   }


   getWeather(cityName:string, countryCode:string){
      return this.httpClient.get(`${this.url}${cityName},${countryCode}`)
   }

}
