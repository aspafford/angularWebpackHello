app.service('local', function() {

  this.data = {};

  this.get = function(key) {
    return this.data[key];
  }

  this.set = function(key, val) {
    this.data[key] = val;
  }

  this.getSomeText = function() {
    return this.get('someText');
  }

});