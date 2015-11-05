angular.module('directings')
.directive('post', function(){
  return {
    scope: {
      title: '=',
      username: '='
    },
    templateUrl: 'templates/post.html'
  };
});
