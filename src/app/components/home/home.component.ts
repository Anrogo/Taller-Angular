import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponseModel } from 'src/app/models/user-response.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uResponse!: UserResponseModel;
  page: number;
  totalPages: number;
  loading: boolean = true;

  constructor(
    private _loginService: LoginService,
    private _usersService: UsersService,
    private router: Router,
  ) {
    this.page = 0;
    this.totalPages = 0;
   }

   ngOnInit(): void {
    this.updateData();
  }

  updateData(): void {
    this.loading = true;
    this._usersService.getUsers(this.page).subscribe(r => {
      this.uResponse = r;
      this.totalPages = this.uResponse.total_pages *10;
      this.loading = false;
    })
  }
}
