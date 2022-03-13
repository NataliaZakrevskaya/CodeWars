function Archiver() {
    var temperature = null;
    var archive = [];
    Object.defineProperty(this, 'temperature', {
        get: function() { return temperature; },
        set: function(value) {
            temperature = value
            archive.push({date: new Date(), val: temperature});
        }
    })
    this.getArchive = function() {return archive;};
}