import { Component, OnInit } from '@angular/core';
import { ProblemaModel } from 'src/app/services/problemas-api/problema-model';
import { ProblemasApiService } from 'src/app/services/problemas-api/problemas-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    listaProblemas: ProblemaModel[];


  constructor(private problemasApi: ProblemasApiService) { }

  ngOnInit(): void {

    this.problemasApi.Lista().subscribe((list) =>{this.listaProblemas = list})

  }

}
