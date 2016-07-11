(function (module) {
  "use strict";
  
  var noteCtrl = function () {
    var vm = this;
  };
  
  var dbspNote = {
    bindings: {
      itemData: "<"
    },
    require: {
      parent: "^dbspNoteList"
    },
    templateUrl: "dbspNote.component.html",
    controllerAs: "vm",
    controller: [noteCtrl]
  }
  
  module.component("dbspNote", dbspNote);
  
  
}(angular.module("dbspNoteManager")));
