import { Component, Input, OnInit } from '@angular/core';
import { ProblemaModel } from 'src/app/services/problemas-api/problema-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  address = 'R. Orlando Signorini, Vila Brasileira, Mogi das Cruzes - SP';
  description = 'As grandes quantidades de chuvas atuais têm gerado muitos buracos nas vias, os quais a cada dia se aprofundam e aumentam de extensão.';
  name = 'Buraco na rua Orlando Signorini ';
  photo= 'https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/buracos-nas-ruas1483400918.jpg';
  tags = 'Mobilidade Urbana, Acessibilidade';
  constructor() { }

  @Input() problema:ProblemaModel;


  ngOnInit(): void {
  }

}
