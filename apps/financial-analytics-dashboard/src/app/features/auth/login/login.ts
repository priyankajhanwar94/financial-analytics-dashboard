import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { finalize } from "rxjs";
import { LoginService } from "./login.service";
import { TokenService } from "../../../core/services/token.service";
import { CommonModule } from "@angular/common";
import { LoaderService } from "../../../core/services/loader.service";

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  private loginService = inject(LoginService);
  private router = inject(Router);
  private tokenService = inject(TokenService);
  private loaderService = inject(LoaderService);

  loginForm = new FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  errorMessage = '';

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loaderService.show();
    this.errorMessage = '';

    const payload = this.loginForm.getRawValue();

    this.loginService.login(payload)
      .subscribe({
        next: (res: any) => {
          this.loaderService.hide()
          this.tokenService.setToken(res.token);
          this.router.navigate(['/main/dashboard']);
        },
        error: () => {
          this.loaderService.hide();
          this.errorMessage = 'Invalid credentials!';
        }
      });
  }
}