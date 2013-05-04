console.log('module formInput');

angular.module('widgets', [])
  .directive('formInput', function() {
    return {
        restrict: 'E',
        compile: function(element, attrs)
        {
            var type = attrs.type || 'text';
            var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
            var htmlText = '<div class="control-group">' +
                '<label class="control-label" for="' + attrs.formId + '">' + attrs.label + '</label>' +
                    '<div class="controls">' +
                    '<input ng-model="' + attrs.model + '" type="' + type + '" class="input-big" id="' + attrs.formId + '" name="' + attrs.formId + '" ' + required + '>' +
                    '</div>' +
                '</div>';
            element.replaceWith(htmlText);
        }
    };
});

angular.module('widgets').directive('formfields', function(){
    return {
        controller: FormFieldsController,
        restrict: 'E',
        template: '<ng:switch on="type"> <h3 ng:switch-when="raz"> <input type="radio" ng:model="field.value" value="{{option.value}}"/> </h3> ',
        replace: true,
        scope: {}, 
        transclude: true,
        //'link': function(scope, element, attrs) {
        //  debugger;
        //},
        compile: function (tElement, tAttrs, transclude) {
            return {
                pre: function (scope) {
                    transclude(scope, function (clone) {
                        scope.type = "raz";
                        angular.forEach(clone, function(el, index){ 
                            if (el.getAttribute)  {
                            var name = el.getAttribute('name');
                            if (name) {
                                console.log(name);
                                scope.wnetrze += '<label>' + name + '</label>' + 
                                '<input type="text" name="name" ng-model="project.name" required>';
                            }
                            }
                        });
                        //scope.wnetrze = 'wnetrze';//clone[0].textContent.toLowerCase();
                        //scope.funkcja();
                    });
                },
                post: function (scope) {
                    //scope.wnetrze = ;
                //  return { },
                    // load the definition into scope
                    //scope.getDefinition(scope.term);
                }
            }
        }

        // compile: function compile(tElement, tAttrs, transclude) {
        //  return {
        //      pre: function preLink(scope, iElement, iAttrs, controller) { 
        //          debugger;
        //      },
        //      post: function postLink(scope, iElement, iAttrs, controller) { 
        //          debugger;
        //      }
        //  }
        // },
    }

});



angular.module('widgets').directive('formfields', function(){
    return {
        controller: FormFieldsController,
        restrict: 'E',
        template: '<ng:switch on="type"> <h3 ng:switch-when="raz"> <input type="radio" ng:model="field.value" value="{{option.value}}"/> </h3> ',
        replace: true,
        scope: {}, 
        transclude: true,
        //'link': function(scope, element, attrs) {
        //  debugger;
        //},
        compile: function (tElement, tAttrs, transclude) {
            return {
                pre: function (scope) {
                    transclude(scope, function (clone) {
                        scope.type = "raz";
                        angular.forEach(clone, function(el, index){ 
                            if (el.getAttribute)  {
                            var name = el.getAttribute('name');
                            if (name) {
                                console.log(name);
                                scope.wnetrze += '<label>' + name + '</label>' + 
                                '<input type="text" name="name" ng-model="project.name" required>';
                            }
                            }
                        });
                        //scope.wnetrze = 'wnetrze';//clone[0].textContent.toLowerCase();
                        //scope.funkcja();
                    });
                },
                post: function (scope) {
                    //scope.wnetrze = ;
                //  return { },
                    // load the definition into scope
                    //scope.getDefinition(scope.term);
                }
            }
        }

        // compile: function compile(tElement, tAttrs, transclude) {
        //  return {
        //      pre: function preLink(scope, iElement, iAttrs, controller) { 
        //          debugger;
        //      },
        //      post: function postLink(scope, iElement, iAttrs, controller) { 
        //          debugger;
        //      }
        //  }
        // },
    }

});