console.log('script entry:::');
var app = angular.module("myApp",[]);

app.controller("myController",function($scope,$http){

    $scope.listFlag = false;
    $scope.HDLFlag = "angular is working";

	var url = 'http://192.168.244.174:3000';
	
    // example url ajax call
	// $scope.upsert = $http.get(url+"/data")
 //    .then(function(response) {
 //    	console.log('response',response);
 //        $scope.user = response;
 //    });

    // insert data into couchbase server
    // $scope.insertData = function(user) {
    	
    //     console.log('sendData from view:',user);
    // 	var data = user;
    // 	$http({
    //         url: url+"/upsert",
    //         method: "POST",
    //         data: {data: data},
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(response){
    //         $scope.response = response;
    //         console.log(response);
    //     }).error(function(error){
    //         $scope.error = error;
    //         console.log('error');
    //     });
    // };
  
    // retrieve data
    $scope.retrieve = function() {

        console.log('retrieve step 1');

        $http({
            method: "GET",
            url: url+"/api/coffeeshops",
            dataType: 'jsonp',
            headers: {
                "Content-Type": "application/javascript",
                "access_token": "sometoken"
            }
        }).success(function(response){
                console.log("retrieve data value",response);
                $scope.retrieveData = response;
        }).error(function(error){
            $scope.error = error;
            console.log("retrieve error",error);
        });
   
    };

   $scope.retrieveCouchbase = function() {

        console.log('retrieve step 1');

        $http({
            method: "GET",
            url: url+"/api/couchbasemodels/lbuser::test1",
            dataType: 'jsonp',
            headers: {
                "Content-Type": "application/javascript",
                "access_token": "sometoken"
            }
        }).success(function(response){
                console.log("retrieve data value",response);
                $scope.retrieveCouchbaseData = response;
        }).error(function(error){
            $scope.error = error;
            console.log("retrieve error",error);
        });
   
    };




    // delete docuemnt
    // $scope.delete = function() {
    //     $http({
    //         url: url+"/delete",
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(response){
    //         console.log("deleted successfully");
    //     }).error(function(error){
    //         $scope.error = error;
    //         console.log("delete error",error);
    //     });
    // };

    // // count
    // $scope.count = function() {
    //     $http({
    //         url: url+"/count",
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(response){
    //         console.log("count successfully",response.count.rows[0].value);
    //         $scope.count = response.count.rows[0].value;
    //     }).error(function(error){
    //         $scope.error = error;
    //         console.log("count error",error);
    //     });
    // };

    // $scope.N1ql_query = function() {
    //     $http({
    //         url: url+"/N1qlQuery",
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(res){
    //         console.log("N1qlQuery response",res);
    //         $scope.N1ql = res;
    //     }).error(function(err){
    //         console.log(err);
    //     });
    // };

    // mysql insert

    $scope.mysqlInsertData = function(userData) {

        console.log('mysql insert data',userData);

        $http({
            url: url+"/api/coffeeshops",
            method: "POST",
            data: {
                "name": userData.name,
                "city": userData.city
            },
            headers: {
                "Content-Type": "application/json",
                "access_token": "sometoken"
            }
        }).success(function(res){
            console.log("mysql insert response",res);
        }).error(function(err){
            console.log(err);
        });
    };

    $scope.couchbaseInsertData = function(userData) {

        console.log('mysql insert data',userData);

        $http({
            url: url+"/api/couchbasemodels",
            method: "POST",
            data: {
                "id": userData.name,
                "name": userData.city
            },
            headers: {
                "Content-Type": "application/json",
                "access_token": "sometoken"
            }
        }).success(function(res){
            console.log("mysql insert response",res);
        }).error(function(err){
            console.log(err);
        });
    };
    // // select data 
    
    // $scope.mysqlUserData = function() {
    //     $http({
    //         url: url+"/MysqlAPISelectQuery/get",
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(res){
            
    //         console.log("mysql select data",res);
    //         $scope.UserData = res;
            
    //     }).error(function(err){
    //         console.log(err);
    //     });
    // };

    // // email dropdown select username and age
    // $scope.selectEmailDetails = function(selectmail){
    //     // console.log('selectmail id',selectmail);
    //     $scope.selectmail = selectmail;
    //     $http({
    //         url: url+"/MysqlAPISelectQuery/getDetails",
    //         method: "POST",
    //         data: {data: selectmail},
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(res){
    //         console.log("mysql update response",res[0]);
    //         $scope.updateData.age = res[0].age;
    //         $scope.updateData.username = res[0].username;
    //     }).error(function(err){
    //         console.log(err);
    //     });
    // }     

    // // update data 
    // $scope.updateSuccessFlag = false;
    // $scope.mysqlupdate = function(email){
    //     $scope.mysqlUserData();
        
    //     email.email_id = $scope.selectmail;
    //     console.log('email',email,$scope.selectmail);
    //     $scope.listFlag = false;
    //     $http({
    //         url: url+"/MysqlAPISelectQuery/update",
    //         method: "POST",
    //         data: email,
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         }
    //     }).success(function(res){
    //         $scope.updateSuccessFlag = true;
    //         console.log("mysql update response",res);
    //     }).error(function(err){
    //         $scope.updateSuccessFlag = false;
    //         console.log(err);
    //     });
    // }

    // // display list
    // $scope.diaplayList = function() {
    //     $scope.mysqlUserData();
    //     $scope.HDLFlag = true;
    //     $scope.listFlag = true;
    // }
    // $scope.hideDiaplayList = function() {
    //     $scope.listFlag = false;
    //     $scope.HDLFlag = false;
    // }

    // // $scope.Doc = '';
    // // file upload
    // $scope.saveFileUpload = function(){
    //     console.log('details :',$scope.fileDet);
    //     console.log($('#f').val());

    //     // exit();
        
    // }
    // $scope.uploadFile = function(){
    //    var file = $scope.myFile;
       
    //    console.log('file is ', $scope.myFile );
    //    console.dir(file);

    //     var uploadUrl = "../config/images";

        
        
    //     console.log(uploadUrl);
    //     fileUpload.uploadFileToUrl(file, uploadUrl);

    //     $scope.Data = {
    //         fileName : file.name
    //     };

    //    // $scope.fileData = 'uploadFile';
    //     $http({
    //         url: url+"/fileAPI/upload",
    //         method: "POST",
    //         data : {fileData: $scope.myFile.name},
    //         headers: {
    //             "Content-Type": "application/json",
    //             "access_token": "sometoken"
    //         } 
    //     }).success(function(response){
    //         console.log("file upload response", response);
    //     }).error(function(err) {
    //         console.log("error : ",err);
    //     }); 
       
    // };

});


 