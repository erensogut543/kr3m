import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class CouponService {

    private readonly baseUrl = "assets/coupon-list.json";

    constructor(private httpClient: HttpClient){
        
    }

    getCouponList():Observable<any>{
        return this.httpClient.get(this.baseUrl);
    }

}