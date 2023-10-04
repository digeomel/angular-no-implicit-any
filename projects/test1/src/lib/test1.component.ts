import { Component } from '@angular/core';

@Component({
  selector: 'lib-test1',
  template: `
    <p>
      test1 works!
    </p>
  `,
  styles: [
  ]
})
export class Test1Component {
    testMethodWithParam(param: number) {
        return param * 2;
    }
}
