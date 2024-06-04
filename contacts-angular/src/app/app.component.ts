import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // title = 'contacts';
  public namePage: string | undefined;
  
  constructor() {}
  
  ngOnInit(): void {
    
  }
}
