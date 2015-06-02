
       
        var formApp = angular.module('formApp', []);

        // create angular controller and pass in $scope and $http
        function formController($scope, $http) {
         
          // create a blank object to hold our form information
          // $scope will allow this to pass between controller and view

            $scope.formData = {};
            // when submitting the add form, send the text to the node API        

            $scope.createWordOrder= function(form) {
              $http.post('/api/wo', $scope.formData)
                .success(function(data) {
                  

                  if ($('#woForm').valid()) {
                      console.log("successs - data.name:%s",data.name);
                      $scope.formData = {};
                      form.$setPristine();
                      alert("created id:" + data._id);
                      $('#dialog').css("display","block");
                  }

                })
                .error(function(data) {
                  console.log('Error: ' + data);
                });

            };
            $scope.reset=function(form){
              if (form) {
                console.log('reset form is valid');
                form.$setPristine();
                $scope.formData = {};

                //form.$setUntouched();
              }
              $scope.formData = angular.copy($scope.formData);
              $('#dialog').css("display","none");
                    
            };    
        }
        
    