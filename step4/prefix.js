var token = '65b28a61573cb27ec2efd1fd3eaeb539';

function getStrings(callback) {
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/prefix';  
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json'); 
  
  request.onreadystatechange = function() {
    if(this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      callback(response.prefix, response.array);
    }
  };

  var body = {
    'token': token
  };
  
  request.send(JSON.stringify(body));
}

function removePrefix(prefix, array){
  //Iterate over array and remove strings that begin with given prefix 
  for(i = 0; i < array.length; i++) {
    if(array[i].startsWith(prefix)){
      array.splice(i, 1);
      --i;
    } 
  }
  
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/prefix/validate';  
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json'); 
  
  var body = {
    'token': token,
    'array': array
  };
  
  request.send(JSON.stringify(body));

}
getStrings(function(prefix, array){
  removePrefix(prefix, array);
});
