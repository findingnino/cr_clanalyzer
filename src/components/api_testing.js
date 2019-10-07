const fetch = require('cross-fetch');
//const warlog = require('./warlog.json');

const cors_proxy = "https://cors-anywhere.herokuapp.com/"
const url = cors_proxy+"https://api.clashroyale.com/v1/clans/%2388QY8QQV/warlog"
const url2 = "https://api.clashroyale.com/v1/clans/%2388QY8QQV/warlog"

let headers = {
    'Accept': 'application/json',
    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQzMzdlOTJkLWMyNWItNDk3Zi1hYmYzLTM0Y2VjOTFmN2E4ZiIsImlhdCI6MTU2NjYwODU5Nywic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDguNTAuMTkzLjI0OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.29HPbcoiKGyyKH44F0YMPSh82JhhJ94IN2nQyhgB7_j94KLb8NgS3AvTSCqoVvO-pICYjl8ksN3zW3abJaIZ_A',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Request-Headers': '*',
};

fetch(url, {
    method: 'Get',
    //mode: 'cors',
    headers: headers,
}).then(result => result.json())
  .then(result => console.log(result))
  .catch(err => console.log(err))

//console.log(warlog)


/*
var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
console.log( networkInterfaces );
*/