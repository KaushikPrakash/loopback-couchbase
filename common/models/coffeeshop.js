module.exports = function(coffeeshop) {
  
   coffeeshop.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is ' + currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };

  // creating new api call coffeeshops/status
  coffeeshop.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );


// creating new api call /getname

  coffeeshop.getName = function(shopId, cb) {
    coffeeshop.findById( shopId, function (err, instance) {
        response = "Name of coffee shop is " + instance.name;
        cb(null, response);
        console.log(response);
    });
  }

  coffeeshop.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );


};
