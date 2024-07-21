import {expect, fixture, html} from '@open-wc/testing';
import {MyDispatcherComponent} from './my-dispatcher.component';
suite('hello-world.component tests', () => {
  test('fixture instantiation', async () => {
    const el: HTMLElement = (await fixture(
      html`<my-dispatcher></my-dispatcher> `
    )) as MyDispatcherComponent;
    expect(el).not.to.equal(null);
    //    expect(true).to.equal(false);
  });
});
