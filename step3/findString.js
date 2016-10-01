var token = '65b28a61573cb27ec2efd1fd3eaeb539';

function getStrings(callback) {
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/haystack';  
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json'); 
 
  //When response has completed send back the response to the caller 
  request.onreadystatechange = function() {
    if(this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      callback(response.needle, response.haystack);
    }
  };

  var body = {
    'token': token
  };
  
  request.send(JSON.stringify(body));
}

function findString(needle, haystack){
  var map = new Map();

  //Iterate over strings and put it and its index into a hashmap
  for(i = 0; i < haystack.length; i++)
    map.set(haystack[i], i);

  //Get index of given string from hashmap
  var strLoc = map.get(needle);
  
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/haystack/validate';  
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json'); 
  
  var body = {
    'token': token,
    'needle': strLoc
  };
  
  request.send(JSON.stringify(body));

  
}
getStrings(function(needle, haystack){
  findString(needle, haystack);
});

