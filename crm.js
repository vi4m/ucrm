
function ProductInfoCtrl($scope) {
    $scope.details = [
    {dt:'condition',dd:'brand new'},
    {dt:'year bought',dd:'3 years ago'}
    ];
}

function MenuCtrl($scope) {
    $scope.menu= [
    {name:'Add customer',href:'#/customer/add/'},
    {name:'Search customer',href:'#/customer/'}
    ];
}


angular.module('crm', ['project_db', 'widgets']).
config(function($routeProvider) {
    $routeProvider.
    when('/customer/', {controller:ListCustomerCtrl, templateUrl:'customer/list.html'}).
    when('/customer/edit/:customerId', {controller:EditCtrl, templateUrl:'customer/edit.html'}).
    when('/customer/add/', {controller:AddCustomerCtrl, templateUrl:'customer/add.html'}).
    otherwise({redirectTo:'/customer/'});
});


function QuickSearchCtrl($rootScope, $scope) {
    $scope.keypress = function() {
        $rootScope.$broadcast('search', $scope.search_text);
    }
}

function ListCustomerCtrl($rootScope, $scope, models) {
    $scope.app_title = "Aplikacja";
    $scope.customers = [];
    $scope.section = "Customers list";

    $scope.$on('search', function(scope, search_text) {
        $scope.customers = [];
        models.Customer.all().filter('name', 'LIKE', '%' + search_text + '%').each(function(customer) {
                $scope.customers.push(customer);
                $scope.$apply();
        });
    });
    $rootScope.$broadcast('search', '');
    }


function AddCustomerCtrl($scope, $location, $routeParams, models) {
    $scope.save = function(data) {
        var customer = new models.Customer({
            name: $scope.name
        });
        persistence.add(customer);
        persistence.flush();
        $location.path('/edit/' + customer.id);
    };
}


function EditCtrl($scope, $location, $routeParams, models) {
    var cid = $routeParams.customerId;
    var self = this;

    models.Customer.load(cid, function(customer) {
        $scope.customer = customer;
        $scope.$apply();
    });

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.customer);
    };

    $scope.destroy = function() {
        self.original.destroy(function() {
            $location.path('/list');
        });
    };

    $scope.save = function() {
        $scope.customer.update(function() {
            $location.path('/');
        });
    };
}

