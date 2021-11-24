import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  slides = [
    {'image': 'assets/back.jpg'},
    {'image': 'assets/img1.jpg'},
    {'image': 'assets/img2.jpg'},
    {'image': 'assets/img3.jpg'},
    {'image': 'assets/img4.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
