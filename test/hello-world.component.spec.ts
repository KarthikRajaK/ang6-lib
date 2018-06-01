import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { Ang6LibModule } from '../src';

describe('Ang6-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ang6LibModule.forRoot()]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      'Hello world from the ang6 lib module!'
    );
  });
});
