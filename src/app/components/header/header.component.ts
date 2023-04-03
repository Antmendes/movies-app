import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sizeBig = false;

  constructor() { }

  ngOnInit(): void {
   if (window.innerWidth > 880) {
    this.sizeBig = true
   }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sizeBig = window.innerWidth > 880; // altere o valor para o tamanho da tela que você deseja usar como ponto de interrupção
  }

}
