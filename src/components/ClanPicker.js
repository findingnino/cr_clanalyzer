import React from 'react';
import PropTypes from "prop-types";

class ClanPicker extends React.Component {

    //#88QY8QQV
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    myInput = React.createRef();

    goToClan = (event) => {
        event.preventDefault();
        //console.log("Going to store");
        const clanTag = encodeURIComponent(this.myInput.current.value);
        this.props.history.push(`/clan/${clanTag}`)
    }

    /* Same as above, BUT requires this.goToClan.bind(this) in constructor
    goToClan(event) {
        event.preventDefault();
        console.log("Going to store");
        console.log(this);
    }
    */

    render() {
        return (
            <form className="store-selector"
            onSubmit={this.goToClan}>
                <h2> Enter a Clan Tag below: </h2>
                <input 
                    type="text" 
                    required placeholder="Clan Tag"
                    ref={this.myInput}
                /> 
                <button type="submit">Enter the clan page</button>
            </form>
        )
    }
}

export default ClanPicker;