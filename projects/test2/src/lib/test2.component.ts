import { Component } from '@angular/core';

@Component({
  selector: 'lib-test2',
  template: `
    <p>
      test2 works!
    </p>
  `,
  styles: [
  ]
})
export class Test2Component {
    testMethodWithParam(param) {
        return param * 2;
    }
}
