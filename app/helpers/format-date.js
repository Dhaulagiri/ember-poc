import Ember from 'ember';

export function formatDate(input) {
  var val;
  if (input !== null && input !== undefined && input.length > 0) {
    val = input[0];
  } else {
    val = input;
  }

  if (val === null || val === '') {
    return "N/A";
  } else {
    return moment(val).format('MM/DD/YY MM:SSa');
  }
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
