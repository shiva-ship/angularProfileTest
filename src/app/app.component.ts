import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"
import { DatePipe } from '@angular/common';
// import { PreloaderComponent } from './components/general/preloader/preloader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shivansh -portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService,
    public datepipe: DatePipe
    // public preloadStatus:PreloaderComponent
  ) {
  }
  ngOnInit(): void {
    
    // this.preloadStatus.showPreloader=true
    this.languageService.initLanguage()
    console.log("this is After loading",this.datepipe.transform((new Date), 'SSS'))
    this.titleService.setTitle("Shivansh Rastogi | Full Stack Developer | Spring Developer | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, MEAN Stack Developer , MERN Stack Development , Software Engineer, software, developer' },
      { name: 'description', content: 'As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express.' },
    ]);
    
    AOS.init();


  }
 
}
