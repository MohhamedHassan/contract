
import { AbstractControl } from "@angular/forms";

export function emptyContent(control:AbstractControl) {

    if(control.value && control.value.trim()=='') return {invalidContent:true}
   
   return null
}