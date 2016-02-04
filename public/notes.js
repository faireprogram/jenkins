(function(window) {
    var Notes = function() {
        var notes = [];
        this.add = function(note) {
            notes.push(note);
        };
    };

    //add an object that implements Notes interface is used in a service to add notes eg:

    var NotesService = function(notes) {

        function writeNote(msg) {
            notes.add(msg);
        }

        return {
            writeNote: writeNote
        };
    };

    var ext = function(obj, extObj) {
        for (var k in extObj) {
            obj[k] = extObj[k];
        }
        return obj;
    };

    window.main = ext(window.main || {}, {
        Notes: Notes,
        NotesService: NotesService
    });
})(this);
