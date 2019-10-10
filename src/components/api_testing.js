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
/*
const url3 = "https://us-central1-testing-11931238.cloudfunctions.net/clanalyzertesting?key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFkMmM0ZWJmLTliNzEtNDE2Zi1hYzI4LTYwNjljYTI3NDFhZCIsImlhdCI6MTU3MDY3MDUxNSwic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4yMDMuMjUyLjEyNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qkD2hV0KG_q6DwiReBcf98LU7cEXRzn52ggX0LAVNiMWv0_Qie9qJJgSP0_5fsbodTqnfFFBSeSDqn17EoRJ4Q"
fetch(url3, {
    method: 'Get',
    //mode: 'cors',
    //headers: headers,
}).then(result => result.json())
  .then(result => console.log(result.items[0]))
  .catch(err => console.log(err))
*/
const get_clan_warlog = () => {
  const url4 = "https://us-central1-testing-11931238.cloudfunctions.net/clanalyzertesting?key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFkMmM0ZWJmLTliNzEtNDE2Zi1hYzI4LTYwNjljYTI3NDFhZCIsImlhdCI6MTU3MDY3MDUxNSwic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4yMDMuMjUyLjEyNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qkD2hV0KG_q6DwiReBcf98LU7cEXRzn52ggX0LAVNiMWv0_Qie9qJJgSP0_5fsbodTqnfFFBSeSDqn17EoRJ4Q"
  const output = fetch(url4)
    .then(result => result.json())
    .then(result => result.items)
    .then(result => {return result})
    .catch(err => console.log(err))

  return output
}

const warlog = get_clan_warlog()

console.log(warlog)


/*
var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
console.log( networkInterfaces );
*/