var request = new XMLHttpRequest();
var address = 'http://challenge.code2040.org/api/register'

request.open('POST', address);

request.setRequestHeader('Content-Type', 'application/json');

var body = {
  'token': '65b28a61573cb27ec2efd1fd3eaeb539',
  'github': 'http://github.com/rbautista11/Code2040'
};

request.send(JSON.stringify(body));
