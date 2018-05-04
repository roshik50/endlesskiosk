import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  slides = [
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    
  ];

  constructor() { }

  ngOnInit() {
  }


  slideConfig = {"slidesToShow": 5, "slidesToScroll": 4};
 
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
 
  afterChange(e) {
    console.log('afterChange');
  }
}
