import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inclodlatter:boolean=false;
  inclodnumber:boolean=false;
  inclodsymbol:boolean=false;
  password : string ;
  length:number=0;

  constructor(){
    this.password=""
  }
  onbutton(){
    const number = "0123456789";
    const latter ="abcdefghjkloqzxABCDEFGHYUJIKOLPMNJ";
    const symbol ="!@#$%^&*_+";
    let validcar ='';
    if(this.inclodnumber){
      validcar += number
    }
    if(this.inclodlatter){
      validcar+=latter
    }
    if(this.inclodsymbol){
      validcar+=symbol
    }
      let genertpassword = "";

      for( let index =0 ; index < this.length ; index++){
        let index = Math.floor(Math.random()*validcar.length);
        genertpassword += validcar[index];

      }
    this.password= genertpassword


  }
  getpassword(){
    return this.password
  }
  onchngelatter(){
    this.inclodlatter =!this.inclodlatter
  }
  onchngnumber(){
      this.inclodnumber= !this.inclodnumber
  }
  onchngsymbols(){
    this.inclodsymbol = !this.inclodsymbol

  }

  onchengelength(value:string){
    const parsvalve = parseInt (value)
       if(!isNaN(parsvalve)){
        this.length=parsvalve

       }
  }
}
