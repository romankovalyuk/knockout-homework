
(function(myApp) {
    function productsViewModel() {
        var self = this;

        self.selectedProduct = ko.observable("");
        self.productCollection = ko.observableArray([]);

        self.listViewSelectedItem = ko.observable(null);

        self.listViewSelectedItem.subscribe(function(product) {
            if (product) {
                self.selectedProduct(product);
            }
        });

        self.AddNewProduct = function () {
            debugger;
            var p = new myApp.Product();
            self.selectedProduct(p);
        };

        self.DoneEditingProduct = function() {
            var p = self.selectedProduct();

            if (!p) {
                return;
            }

            if (self.productCollection.indexOf(p) > -1) {
                return;
            }

            self.productCollection.push(p);

            self.selectedProduct(null);
        };

        self.RemoveProduct = function() {
            var p = self.selectedProduct();

            if (!p) {
                return;
            }

            self.selectedProduct(null);

            return self.productCollection.remove(p);
        };
    };

    myApp.ProductsViewModel = productsViewModel;

}(window.MyApp));