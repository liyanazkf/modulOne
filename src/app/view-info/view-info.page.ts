import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.page.html',
  styleUrls: ['./view-info.page.scss'],
})
export class ViewInfoPage implements OnInit {
  name: any;
  username: any;
  age: any;
  email: any;
  password: any;
  
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.name= this.router.getCurrentNavigation().extras.state.name;
        this.username= this.router.getCurrentNavigation().extras.state.username;
        this.age = this.router.getCurrentNavigation().extras.state.age;
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;

        console.log("Data Name is ", this.name);
        console.log("Data Username is ", this.username);
        console.log("Data Age is ", this.age);
        console.log("Data Email is ", this.email);
        console.log("Data Password is ", this.password);
        
      }
    })
  }
  ngOnInit() {
  }

}
