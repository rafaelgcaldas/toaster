import { Component } from '@angular/core';

import { ToasterService } from './toaster/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toasterService: ToasterService
  ) {}

  public toasterSuccess() {
    this.toasterService.pop({ type: "success", title: "Teste title", message: "Teste message" });
  }

  public toasterInfo() {
    this.toasterService.pop({ type: "info", title: "Teste title", message: "Teste message" });
  }

  public toasterWarning() {
    this.toasterService.pop({ type: "warning", title: "Teste title", message: "Teste message" });
  }

  public toasterError() {
    this.toasterService.pop({ type: "error", title: "Teste title", message: "Teste message" });
  }
}
