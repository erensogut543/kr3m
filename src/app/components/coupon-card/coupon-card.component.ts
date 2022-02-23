import { Component, Input, OnInit } from '@angular/core';
import { CouponModel } from 'src/app/models/coupon.model';

@Component({
  selector: 'coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss']
})
export class CouponCardComponent implements OnInit {

  @Input() coupon:CouponModel = new CouponModel();

  constructor() { }

  ngOnInit(): void {
  }

}
