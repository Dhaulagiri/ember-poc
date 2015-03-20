import {
  formatCurrency
} from '../../../helpers/format-currency';
import { module, test } from 'qunit';

module('FormatCurrencyHelper');

// Replace this with your real tests.
test('it formats a number with currency', function(assert) {
  assert.expect(2);

  var result = formatCurrency(42);
  assert.equal(result, '$42.00', 'Formats the number with currency');

  result = formatCurrency(null);
  assert.equal(result, 'N/A', 'Formats null number as N/A');
});
