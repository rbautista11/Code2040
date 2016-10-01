var token = '65b28a61573cb27ec2efd1fd3eaeb539';

function getString(callback){
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/reverse';
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json');
  
  //When request has been completed send the response back to the caller
  request.onreadystatechange = function() {
    if(this.readyState == 4) {
      callback(this.responseText);
    }
  };
  
  var body = {
    'token': token
  };
  
  request.send(JSON.stringify(body));

}

function reverseString(string){
  
  //Split string into chars then reverse them and join them back together
  var reversedStr = string.split('').reverse().join('');
 
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/reverse/validate';
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json');
  
  var body = {
    'token': apiKey,
    'string': reversedStr
  };
  
  request.send(JSON.stringify(body));
}

getString(function(string){
  reverseString(string);
});
