import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('quote-module', {
  // specify the other units that are required for this test
  needs: ['helper:format-currency', 'helper:format-percent']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
