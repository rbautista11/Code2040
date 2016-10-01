var token = '65b28a61573cb27ec2efd1fd3eaeb539';

function getDateStamp(callback) {
  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/dating';  
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json'); 
  
  request.onreadystatechange = function() {
    if(this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      callback(response.datestamp, response.interval);
    }
  };

  var body = {
    'token': token
  };
  
  request.send(JSON.stringify(body));

}

/*
 * Creates date var out of given information then increments it by the given
 * interval and then puts it into the given format constraints. It finally
 * posts the result to the given address.
*/
function setDateStamp(date, interval){
  var newDate = new Date(date);
  newDate.setSeconds(newDate.getSeconds() + interval);
  var str = newDate.toISOString().substring(0, 19) + 'Z';

  var request = new XMLHttpRequest();
  var address = 'http://challenge.code2040.org/api/dating/validate';  
  
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json'); 
  
  var body = {
    'token': token,
    'datestamp': str
  };
  
  request.send(JSON.stringify(body));
}

getDateStamp(function(date, interval){
  setDateStamp(date, interval);
});
