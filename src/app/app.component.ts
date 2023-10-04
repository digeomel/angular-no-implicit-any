import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularNoImplicitAny';

    testMethodWithParam(param: number) {
        return param * 2;
    }
}
