(function (module) {
  "use strict";
  
  var noteListCtrl = function (bookService) {
    var vm = this;
    vm.$onInit = function () {
      bookService
        .getBooks()
        .then(function (books) {
          vm.books = books;
        });
    };
  };
  
  var dbspNoteList = {
    bindings: {
      category: "@"
    },
    templateUrl: "dbspNoteList.component.html",
    controllerAs: "vm",
    controller: ["bookService", noteListCtrl]
  }
  
  module.component("dbspNoteList", dbspNoteList);
  
  
}(angular.module("dbspNoteManager")));
