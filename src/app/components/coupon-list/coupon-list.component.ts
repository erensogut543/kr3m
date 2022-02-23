import { Component, OnInit } from '@angular/core';
import { CouponModel } from 'src/app/models/coupon.model';
import { CouponService } from 'src/app/services/coupon.service';
import * as _ from "lodash";

@Component({
  selector: 'coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {

  loading:boolean = false;
  couponList:Array<CouponModel> = new Array<CouponModel>();
  cloneCouponList:Array<CouponModel> = new Array<CouponModel>();
  errorMessage:string;
  searchText:string;

  constructor(private couponService:CouponService) {
    this.getCouponList();
  }

  ngOnInit(): void {
  }

  getCouponList(){
    this.loading = true;
    // Let's say request is sent and user is waiting for the response... 
    setTimeout(() => {
      this.errorMessage = "";
      this.couponService.getCouponList().subscribe(res=> {
        this.couponList = res;
        this.sortBy("alphabetisch");
        this.cloneCouponList = _.cloneDeep(this.couponList);
      },error => {
        this.errorMessage = " Unexpected error occured";
      }).add(() => {
        this.loading = false;
      })
    },1500);
    
  }


  searchByCompanyName(){
   this.searchText = this.searchText.trim();
    if(this.searchText){
      this.couponList =  this.cloneCouponList.filter(coupon => coupon.title.toLowerCase().includes(this.searchText.toLowerCase()));
    }else {
      this.couponList = _.cloneDeep(this.cloneCouponList);
    }
    this.sortBy(this.sortString);
  }
  sortString:string;
  sortBy(event:any) {
    this.sortString = (event.target && event.target.value) ? event.target.value : event ;
     
    if(this.sortString == 'alphabetisch'){
      this.couponList.sort((a,b) => {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      });
    }else {
      this.couponList.sort((a,b) =>{
        return b.discount-a.discount
      } )
    }
  }

}
