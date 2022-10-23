import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'form-logon',
    templateUrl: './form-logon.component.html',
    styleUrls: ['./form-logon.component.scss'],
})
export class FormLogonComponent implements OnInit {
    form!: FormGroup;
    msgCpf: string = '';

    @Output() onSubmit: EventEmitter<any> = new EventEmitter();
    @Output() onSignIn: EventEmitter<any> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.form = this.formBuilder.group({
            id: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
        });
    }

    register() {
        this.onSignIn.emit(true);
    }

    send() {
        if (this.form.valid) {
            this.onSubmit.emit(this.form.value);
        }
    }
}
