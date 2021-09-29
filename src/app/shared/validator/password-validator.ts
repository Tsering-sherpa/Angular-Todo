import { AbstractControl, ValidationErrors } from "@angular/forms";

export function hasNumber(control: AbstractControl): ValidationErrors | null {
    const check = /[0-9]/.test(control.value);
    return check ? null : { hasNumber: true };
}
export function hasUpperCase(
    control: AbstractControl
): ValidationErrors | null {
    const check = /[A-Z]/.test(control.value);
    return check ? null : { hasUpperCase: true };
}
export function hasSpecialCharacter(
    control: AbstractControl
): ValidationErrors | null {
    const check = /[^A-Za-z0-9]/.test(control.value);
    return check ? null : { hasSpecialCharacter: true };
}

