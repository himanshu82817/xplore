import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n>80){
      // console.log('more',n)
      document.getElementById('main').style.backgroundColor = 'white'
      document.getElementById('main').style.boxShadow = '2px 2px 4px rgba(133, 133, 133, 0.401)'
      document.getElementById('main').style.padding = '.5% 10%'
      
    }
    if(n<80){
      document.getElementById('main').style.backgroundColor = 'rgba(255, 255, 255, 0)'
      document.getElementById('main').style.boxShadow = '2px 2px 4px rgba(133, 133, 133, 0)'
      document.getElementById('main').style.padding = '2% 10%'
      // console.log( 'less', n)
    }
    
  }

}
