import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

//import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  isLoading: boolean = false;

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit(): void {
    
  }
}
