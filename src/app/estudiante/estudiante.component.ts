import { Component, OnInit, Input } from '@angular/core';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
 @Input()  receptor:string;
vector=[1,2,3,4,5];

  constructor() {
   
   }

  ngOnInit() {
  }

}
