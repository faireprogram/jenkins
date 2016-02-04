(function(window) {

    //complete the unit test to verify that Notes.add has been invoked to add notes
    describe('Notes Service', function() {
        var notesService, notes;

        beforeEach(function() {
            notes = new window.main.Notes();
            notesService = new window.main.NotesService(notes);
        });

        it('should use Noets API to add notes', function() {
            // decorator, make sure the raw function is called as well.
            var add = notes.add;
            var called = false;
            // can switch with jasmine spy on
            // http://jasmine.github.io/2.0/introduction.html
            // code will be like spyOn(notes, 'add')
            notes.add = function(msg) {
                called = true;
                add.call(notes, msg);
            };
            notesService.writeNote('a');
            expect(called).toEqual(true);
        });
    });
})(this);
