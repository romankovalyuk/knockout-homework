window.MyApp = {};

(function (myApp) {
    function app() {
        this.run = function() {
            var vm = new myApp.ProductsViewModel();
            ko.applyBindings(vm);
        };
    };

    myApp.App = app;
}(window.MyApp));
