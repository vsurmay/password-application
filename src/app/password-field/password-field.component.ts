import {Component} from '@angular/core';

@Component({
    selector: 'app-password-field',
    templateUrl: './password-field.component.html',
    styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent {

    passwordValue: string;
    complexityPassword: "empty" | "short" | "ease" | "medium" | "strong";

    passwordValueChange() {
        const regForHardPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/i;

        if (!this.passwordValue) {
            this.complexityPassword = "empty";
        } else if (this.passwordValue.length < 8) {
            this.complexityPassword = "short";
        } else if ( /^\d*$/.test(this.passwordValue) || /^[a-z]*$/i.test(this.passwordValue) || /^[^a-z0-9]*$/i.test(this.passwordValue)) {
            this.complexityPassword = "ease";
        } else if (regForHardPassword.test(this.passwordValue)) {
            this.complexityPassword = "strong"
        } else {
            this.complexityPassword = "medium";
        }

    }

}
