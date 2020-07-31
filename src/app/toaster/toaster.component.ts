import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
      .subscribe(
        (toast: Toaster) => {
          this.toast = toast;
          this.listToast.push(this.toast);
        }
      )
  }

}
