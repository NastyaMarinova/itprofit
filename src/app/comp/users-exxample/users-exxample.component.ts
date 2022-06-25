import { Component, OnInit } from '@angular/core';
import { User } from '../../user-profile/user.interface';
import { mockUsers } from '../../user-profile/mock-users';

@Component({
  selector: 'app-users-exxample',
  templateUrl: './users-exxample.component.html',
  styleUrls: ['./users-exxample.component.scss']
})
export class UsersExxampleComponent {

  public userName: string = "Alex";
  public userLastname: string = "Shevchenco";
  public userAge: number = -110;
  public userAvatarUrl: string = "https://reqres.in/img/faces/9-image.jpg";
  
  public isVisible: boolean = true;
  
  public users: User [] = [...mockUsers]; 
  
  public handleProfileClick (event: MouseEvent){
    console.log(event);
  }

}
