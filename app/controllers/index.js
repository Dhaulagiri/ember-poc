import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['symbol'],
  actions: {
    addNote: function(text) {
      var newNote = this.store.createRecord('note', {
        text: text
      });

      newNote.save();
    },
    deleteNote: function(noteId) {
      debugger
      this.store.find('note', noteId).then(function(note) {
        debugger
        note.destroyRecord();
      });
    }
  }
});
