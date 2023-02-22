import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	form: FormGroup;

	constructor(
		private datePipe: DatePipe
	) {
		this.form = this.createEmptyForm();
	}

	createEmptyForm(): FormGroup {
		const date = this.datePipe.transform(new Date(), 'dd/MM/yyyy') as string;
		return new FormGroup({
			date: new FormControl<string>(date, Validators.required),
			email: new FormControl<string>('', [Validators.required, Validators.email]),
			password: new FormControl<string>('', [Validators.required]),
			number: new FormControl<number>(0, [Validators.required, Validators.min(1)])
		});
	}

	onSubmitForm(): void {
		console.log(this.form.value);
	}

}
