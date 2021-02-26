import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Data} from '@angular/router';
import {ImageShareService} from '../datasharingservice/ImageShareService';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
 imgurl: string;
  constructor(private route: ActivatedRoute, private imageshareservice: ImageShareService) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    console.log(this.imgurl);
  }

  ngOnInit(): void {
   const id =    this.route.snapshot.paramMap.get('imgurl');
   this.imgurl = this.imageshareservice.getImage();
   console.log('id', id);
  }

}
