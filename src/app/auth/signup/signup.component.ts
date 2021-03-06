import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  cities: string[] = [
    'Tel-aviv', 'rishon-lezion', 'ramat-gan', 'givatayim', 'hifa', 'eilat'
  ];
  cellCodes: string[] = [
    '052', '054', '050', '058'
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
