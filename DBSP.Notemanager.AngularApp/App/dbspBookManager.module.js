(function () {
  "use strict";
  
  var module = angular.module("dbspBookManager", []);
  
  var bookService = function ($http) {
    var books = [];
    var getBooks = function () {
      return $http({method: "GET", url: "/App/books.json"}).then(function (response) {
        return response.data.books;
      });
    };
    return {
      getBooks: getBooks
    };
  };
  
  module.factory("bookService", ["$http", bookService]);
  
}());
