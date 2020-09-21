import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from "@angular/router";



@Component({
  selector: 'app-menu-page-layout',
  templateUrl: './menu-page-layout.component.html',
  styleUrls: ['./menu-page-layout.component.css']
})



export class MenuPageLayoutComponent implements OnInit {

  ngOnInit(): void {

    
  }




  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,  private router: Router) {
  }
}
