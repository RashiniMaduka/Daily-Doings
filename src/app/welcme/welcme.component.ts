import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from './../service/data/welcome-data.service'

@Component({
  selector: 'app-welcme',
  templateUrl: './welcme.component.html',
  styleUrls: ['./welcme.component.css']
})
export class WelcmeComponent implements OnInit {
  name=''
  WelcomeMessageFromService:String
 

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)

    );
    

 
  }
  getWelcomeMessageWithParameter(){
    
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)

    );
    

 
  }
  handleSuccessfulResponse(response){
     this.WelcomeMessageFromService=response.message
  }
  handleErrorResponse(error){
    this.WelcomeMessageFromService=error.error.message
  }

}
