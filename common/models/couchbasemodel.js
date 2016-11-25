module.exports = function(Couchbasemodel) {
   // creating new api call /getname

  Couchbasemodel.getFullDocuments = function(shopId, cb) {
    Couchbasemodel.findById( shopId, function (err, instance) {
        response = "Name of coffee shop is " + instance.name;
        cb(null, response);
        console.log(response);
    });
  }

  Couchbasemodel.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
};
