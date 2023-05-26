import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  constructor( public preloadStat:PreloaderComponent) { }
  showPreloader:boolean 
  ngOnInit(): void {
    // this.showPreloader=true
  }

}
