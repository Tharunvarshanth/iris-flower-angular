import { Injectable} from '@angular/core';


@Injectable()
export class ImageShareService{

  private imgurl: string ;

  addImage(url: string ):void{
     this.imgurl = url;
  }
  getImage(): string{
    return  this.imgurl ;
  }
}
