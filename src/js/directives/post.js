angular.module('directings')
.directive('post', function(){
  return {
    scope: {
      title: '=',
      username: '='
    },
    template: "<strong>{{ title }}</strong><br><tt>by {{ username }}</tt>"
  };
});
