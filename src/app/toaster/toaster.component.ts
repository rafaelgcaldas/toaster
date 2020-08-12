import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, timer, interval } from 'rxjs';
import { tap, switchMap, takeUntil, take } from 'rxjs/operators';

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
          this.listToast.forEach( toast => {
              toast.display = true;
          });

        }),
        switchMap(() => timer(3000))
      )
      .subscribe(
        () => {
          this.clearListToaster(this.listToast)
        }
      )
  }

  public clearListToaster(listToast: Toaster[]) {
      const timer = interval(750);
      const takeForListLenght = timer.pipe(take(listToast.length));
      takeForListLenght.subscribe(() => listToast.shift())
  }

  public closeToaster(index: number) {
    this.listToast.splice(index, 1);
  }

}
