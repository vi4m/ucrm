

// var createProductDetails = function (scope, iElement, iAttrs, controller) {
//   console.log('create');
//     scope.$watch('details', function(newVal, oldVal) {
//     angular.forEach(newVal, function(v,k){
//         iElement.append( angular.element('<dt>'+v.dt+'</dt><dd>'+v.dd+'</dd>') );
//         });
//     });
// };

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


angular.module('project', ['project_db', 'widgets']).
config(function($routeProvider) {
    $routeProvider.
    when('/customer/', {controller:ListCtrl, templateUrl:'customer/list.html'}).
    when('/customer/edit/:customerId', {controller:EditCtrl, templateUrl:'customer/edit.html'}).
    when('/customer/add/', {controller:CreateCtrl, templateUrl:'customer/add.html'}).
    otherwise({redirectTo:'/customer/'});
});


function ListCtrl($scope, Customer) {
    $scope.app_title = "Aplikacja";
    $scope.customers = Customer.query();
}


function CreateCtrl($scope, $location, Customer) {
    console.log('New');
    $scope.save = function() {
        Customer.save($scope.customer, function(customer) {
            $location.path('/edit/' + customer._id.$oid);
        });
    };
}

function AddCustomerCtrl($scope, $location, $routeParams, Customer) {
    $scope.test = "test";

}


function EditCtrl($scope, $location, $routeParams, Customer) {
    var self = this;

    Customer.get({id: $routeParams.customerId}, function(customer) {
        self.original = customer;
        $scope.customer= new Customer(self.original);
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

function FormFieldsController($scope, $http) {
    $scope.funkcja = function(dane) {
        alert(dane);
        debugger;
    }
}
