import React from 'react';
import '../css/App.css';
import '../css/w3.css';
import PropTypes from "prop-types";
import TopFiveStandingsCard from './TopFiveStandingsCard';

class App extends React.Component {

  state = {
    warlog: {},
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }
/*
  get_clan_warlog = () => {
    const url3 = "https://us-central1-testing-11931238.cloudfunctions.net/clanalyzertesting?key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFkMmM0ZWJmLTliNzEtNDE2Zi1hYzI4LTYwNjljYTI3NDFhZCIsImlhdCI6MTU3MDY3MDUxNSwic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4yMDMuMjUyLjEyNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qkD2hV0KG_q6DwiReBcf98LU7cEXRzn52ggX0LAVNiMWv0_Qie9qJJgSP0_5fsbodTqnfFFBSeSDqn17EoRJ4Q"
    fetch(url3, {method: 'Get',})
    .then(result => result.json())
    .then(result => console.log(result.items[0]))
    .catch(err => console.log(err))
  }
*/
  // TODO: sort warlog by cardsEarned
  // DONE: fetch works!
  // DONE: callback chain works mostly, easy to break though
  componentDidMount() {
    const url3 = "https://us-central1-testing-11931238.cloudfunctions.net/clanalyzertesting?key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFkMmM0ZWJmLTliNzEtNDE2Zi1hYzI4LTYwNjljYTI3NDFhZCIsImlhdCI6MTU3MDY3MDUxNSwic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4yMDMuMjUyLjEyNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qkD2hV0KG_q6DwiReBcf98LU7cEXRzn52ggX0LAVNiMWv0_Qie9qJJgSP0_5fsbodTqnfFFBSeSDqn17EoRJ4Q";
    fetch(url3)
      .then(results => results.json())
      //.then(results => console.log(results))
      .then(results => {
        this.setState({warlog:results});
      });
    //console.log(this.state.warlog);
  }

  render() {
    return (
      <React.Fragment>
        <div className="w3-row">
          <h2 className="w3-center">You made it to a clan page!</h2>
          <p className="w3-center">Here are some interesting stats about your clan!</p>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 s4"> <TopFiveStandingsCard clanTag={this.props.match.params.clanTag}/> </div>
          <div className="w3-col l7 m3 s4"> <TopFiveStandingsCard clanTag={this.props.match.params.clanTag}/> </div>
          <div className="w3-col l2 m3 s4"> <TopFiveStandingsCard clanTag={this.props.match.params.clanTag}/> </div>
        </div>
        <p>
          {this.state.warlog}
        </p>
      </React.Fragment>
    );
  }
}

export default App;
