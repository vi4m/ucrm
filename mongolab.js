console.log('module ngresource');


angular.module('project_db', ['ngResource']).
    factory('Customer', function($resource) {
      var Customer = $resource('https://api.mongolab.com/api/1/databases' +
          '/crm/collections/customer/:id',
          { apiKey: 'O9bIUqFDxVQ-7Ded_I4PhgblIU0HCqMI' }, {
             update: { method: 'PUT' }
          }
      );
 
      Customer.prototype.update = function(cb) {
        return Customer.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      Customer.prototype.destroy = function(cb) {
        return Customer.remove({id: this._id.$oid}, cb);
      };
 
      return Customer;
    });