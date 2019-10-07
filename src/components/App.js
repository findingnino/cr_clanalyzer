import React from 'react';
import '../css/App.css';
import '../css/w3.css';
import PropTypes from "prop-types";
import TopFiveStandingsCard from './TopFiveStandingsCard';

class App extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
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
      </React.Fragment>
    );
  }
}

export default App;
