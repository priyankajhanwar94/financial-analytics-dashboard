import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { finalize } from "rxjs";
import { LoginService } from "./login.service";
import { TokenService } from "../../../core/services/token.service";

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  private loginService = inject(LoginService);
  private router = inject(Router);
  private tokenService = inject(TokenService);

  loginForm = new FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  isLoading = false;
  errorMessage = '';

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const payload = this.loginForm.getRawValue();

    this.loginService.login(payload)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (res: any) => {
          this.tokenService.setToken(res.token);
          this.router.navigate(['/main/dashboard']);
        },
        error: () => {
          this.errorMessage = 'Invalid credentials';
        }
      });
  }
}