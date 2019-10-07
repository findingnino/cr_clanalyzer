import React from 'react';
import '../css/w3.css';
import PropTypes from "prop-types";

class TopFiveStandingsCard extends React.Component {

    render() {
        return (
            <div className="w3-panel w3-card-2">
                <h6>
                    Top 5 in Clan {this.props.clanTag}
                </h6>
                <ol>
                    <li>He was number 1!</li>
                    <li>Second</li>
                    <li>Third</li>
                    <li>Fourth</li>
                    <li>Fifth</li>
                </ol>
            </div>
        )
    }

}

export default TopFiveStandingsCard;