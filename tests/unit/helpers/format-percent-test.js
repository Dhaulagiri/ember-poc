import {
  formatPercent
} from '../../../helpers/format-percent';
import { module, test } from 'qunit';

module('FormatPercentHelper');

// Replace this with your real tests.
test('it formats a number with percent', function(assert) {
  assert.expect(2);

  var result = formatPercent(42);
  assert.equal(result, '42.00%', 'Formats the number with currency');

  result = formatPercent(null);
  assert.equal(result, 'N/A', 'Formats null number as N/A');
});
