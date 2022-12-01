import { Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Component} from '@angular/core';
import data from '../../../assets/data/tec-predio.json';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }
  validado:boolean=false;
  valido:boolean = false;
  data = data;
  path = 0;
  currPath = this.data.paths[this.path];

  ngOnInit(): void {
    if(this.currPath.features[0].properties.accepted == 0){
      this.validado = true;
    }
    else{
      this.validado = false;
      if(this.currPath.features[0].properties.accepted == 1){
        this.valido = true;
      }
      else{
        this.valido = false;
      }
    }
  
  }

  newPath(i:any) {
    this.newItemEvent.emit(i.target.value);
    this.currPath = this.data.paths[i.target.value];
    this.path = i.target.value;
    this.ngOnInit();
  }



  changeJson(comment:string,valid:number){
    this.currPath.features[0].properties.comment = comment;
    this.currPath.features[0].properties.accepted = valid;
    this.validado = false;
    if(this.currPath.features[0].properties.accepted == 1){
      this.valido = true;
    }
    else{
      this.valido = false;
    }
    this.sendJson();
  }

  sendJson(){
    const fs = require('fs');
    const filename = 'src/assets/data/tec-predio.json';
    
    data.paths[this.path] = this.currPath;

    fs.writeFile(filename, JSON.stringify(data,null,2)
    , function writeJSON(err:any) {
      if (err) return console.log(err);
      console.log(JSON.stringify(data));
      console.log('writing to ' + filename);
    });
  }
}
