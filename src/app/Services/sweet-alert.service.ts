import { Injectable } from '@angular/core';
import swal from 'sweetalert2';



@Injectable({
	providedIn: 'root'
})
export class SweetAlertService {



	constructor() { }

	AlertError(title, text, callback){
		swal({
			type: 'error',
			title: `${title}`,
			text: `${text}`,
		}).then((result) => {
			if(result.value){
				callback();
			}
		})
	}

	AlertSuccess(title, callback, text){
		swal({
			title: `${title}`,
			type: 'success',
			text : `${text}`
		}).then((result) => {
			if (result.value) {
				callback();
			}
		})
	}
	AlertWarning(title, callback,text) {
		swal({
			title: `${title}`,
			type: 'question',
			text : `${text}`,
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'No!',
			confirmButtonText: 'Yes!'
		}).then((result) => {
			if (result.value) {
				callback();
			}
		})
	}

	toastRight(title) {
		swal({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			type: 'success',
			title: `${title}`
		});
	}
	toastRight_err(title) {
		swal({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			type: 'warning',
			title: `${title}`
		});
	}


}
