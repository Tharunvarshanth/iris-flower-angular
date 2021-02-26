import { Component, OnInit } from '@angular/core';
import {Flower} from '../flower';
import {MlserviceService} from '../services/mlservice.service';
import {Router} from '@angular/router';
import {ImageShareService} from '../datasharingservice/ImageShareService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor( private mlserviceservice: MlserviceService, private router: Router, private  imageshareservice: ImageShareService) { }

  flowerModel = new Flower('', '', '', '' );
  submitted = false;
  errorMsg = '';

  ngOnInit(): void {
  }


  onSubmit(value: any): void {
    this.submitted = true;
    this.mlserviceservice.submitValue(value)
      .subscribe(
        data => this.ResultsHandler(data),
        error => this.errorMsg = error.statusText
      );
  }
  ResultsHandler(value): void {
    console.log(value);
    if (value){
      this.imageshareservice.addImage(value[0]);
      this.router.navigate(['/predict', value[0]]);
    }
  }

}
