import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, timer, interval } from 'rxjs';
import { tap, switchMap, takeUntil } from 'rxjs/operators';

import { Toaster } from './toaster.model';
import { ToasterService } from './toaster.service'

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  public unsubscribe: Subscription;

  public toast: Toaster;
  public listToast: Toaster[] = [];

  constructor(
    private toasterService: ToasterService
  ) { }

  ngOnInit(): void {
    this.unsubscribe = this.toasterService.notifier
      .pipe(
        tap((toast: Toaster) => {
          this.listToast.push(toast);
        }),
        switchMap(() => timer(3000))
      )
      .subscribe(
        () => {
          this.ArrayEmpty(this.listToast)
        }
      )
  }

  public ArrayEmpty(array) {
    console.log("teste", array)
    if(array.length > 0) {
      const numbers = timer(500);
        numbers.subscribe(
          () => {
            array.shift();
            this.ArrayEmpty(array);
          })
    } else {
      return;
    }
  }

  public closeToaster(index: number) {
    this.listToast.splice(index, 1);
  }

}
