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
