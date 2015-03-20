import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['symbol'],
  actions: {
    addNote: function(text, symbol) {
      var newNote = this.store.createRecord('note', {
        text: text,
        symbol: symbol
      });

      newNote.save();
    },
    deleteNote: function(noteId) {
      this.store.find('note', noteId).then(function(note) {
        note.destroyRecord();
      });
    }
  },
  filteredNotes: Ember.computed('model.notes.@each', function() {
    // Filter out any notes that don't belong to the currently active symbol
    var notes = this.get('model').notes;
    var symbol = this.get('symbol') || 'AAPL';
    return notes.filter(function(note) {
      return note.get('symbol') === symbol;
    });
  })
});
