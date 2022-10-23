import { AbstractControl } from '@angular/forms';

export class Validate {
    static cpf(control: AbstractControl): { [key: string]: boolean } | null {
        const value = String(control.value);
        const cpf = value ? value.replace(/[^\d]+/g, '') : '';

        if (cpf === '') {
            return { cpf: true };
        }

        // Elimina CPFs invalidos conhecidos
        if (
            cpf.length !== 11 ||
            cpf === '0'.repeat(11) ||
            cpf === '1'.repeat(11) ||
            cpf === '2'.repeat(11) ||
            cpf === '3'.repeat(11) ||
            cpf === '4'.repeat(11) ||
            cpf === '5'.repeat(11) ||
            cpf === '6'.repeat(11) ||
            cpf === '7'.repeat(11) ||
            cpf === '8'.repeat(11) ||
            cpf === '9'.repeat(11)
        ) {
            return { cpf: true };
        }
        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i), 10) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== parseInt(cpf.charAt(9), 10)) {
            return { cpf: true };
        }

        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i), 10) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== parseInt(cpf.charAt(10), 10)) {
            return { cpf: true };
        }

        return null;
    }
}
