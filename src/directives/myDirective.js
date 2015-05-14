function minMax () {

  return {
    restrict: 'EA',
    scope: {
      min: '@',
      max: '@'
    },
    replace: true,
    template: `<p>min is ${min}, max is ${max}</p>`,
    controller: ['$scope', function ($scope) {
      // Default destructuring values
      var {min = 0, max = 100} = $scope;
      console.log('min is %d, max is %d', min, max);
    }]
  }
};

export default minMax;
