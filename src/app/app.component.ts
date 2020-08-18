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
    this.toasterService.pop({ type: "success", title: "Title success", message: "Success message" });
  }

  public toasterInfo() {
    this.toasterService.pop({ type: "info", title: "Teste info", message: "Info message" });
  }

  public toasterWarning() {
    this.toasterService.pop({ type: "warning", title: "Teste warning", message: "Warning message" });
  }

  public toasterError() {
    this.toasterService.pop({ type: "error", title: "Error title", message: "Error message" });
  }
}
