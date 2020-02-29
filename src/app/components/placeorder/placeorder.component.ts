import { Component, OnInit } from '@angular/core';
import { FormData } from 'src/app/model/user.model';
import { CountrieslistService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  constructor(private country: CountrieslistService) { }
  data = new FormData(0, '', '', '','@gmail.com','', '', '', 0, );
  phoneno = ['+91', '+971', '+972', '+198', '+701'];

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.country.allCountries().subscribe(
      data2 => {
        this.countryInfo = data2.Countries;
      },
      err => console.log(err),
      () => console.log('complete')
    );

}
onChangeCountry(countryValue) {
  this.stateInfo = this.countryInfo[countryValue].States;
  this.cityInfo = this.stateInfo[0].Cities;
  console.log(this.cityInfo);
}

onChangeState(stateValue) {
  this.cityInfo = this.stateInfo[stateValue].Cities;
}

getdata(data)
{
  console.log(data);
  if(localStorage.Basket == undefined)
  {
    const cart=[];
    cart.push(data);
    localStorage.Basket = JSON.stringify(cart);
  }
  else{
    const product = JSON.parse(localStorage.Basket);
    product.push(data);
    localStorage.Basket = JSON.stringify(product);
  }
}
}
