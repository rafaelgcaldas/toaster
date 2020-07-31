import { EventEmitter, Output, Injectable } from "@angular/core";
import { Toaster } from './toaster.model';

@Injectable()
export class ToasterService {
    @Output() notifier = new EventEmitter<Toaster>();

    public pop(toast: Toaster) {
        this.notifier.emit(toast);
    }
}