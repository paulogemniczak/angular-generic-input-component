import { Component, Input } from '@angular/core';

import { AbstractFormField } from 'src/app/utils/abstract-form-field';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends AbstractFormField {

	@Input() placeholder: string = '';
	@Input() maskInput?: string;
	@Input() suffix: string = '';
	@Input() type: string = 'text';
	showPassword = false;
	isInputPassword = false;

	ngOnInit(): void {
		this.isInputPassword = this.type === 'password';
	}

	showContent() {
		this.showPassword = !this.showPassword;
		if (this.showPassword) {
			this.type = "text";
		} else {
			this.type = "password";
		}
	}

}
