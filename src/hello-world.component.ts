import { Component } from '@angular/core';

@Component({
  selector: 'Ang6-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ang6 lib';
}
