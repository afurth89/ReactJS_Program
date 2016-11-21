var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var PropTypes = React.PropTypes
var styles = require('../styles')
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')

// PUKE TRICK: places props onto screen to easily check if they're correct
function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return (
    props.isLoading
      ? <p>LOADING!</p>
      : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
          <h1>Confirm Players</h1>
          <div className="col-sm-8 col-sm-offset-2">
            <UserDetailsWrapper header="Player One">
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header="Player Two">
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
          <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-12" style={styles.space}>
              <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                Initiate Battle
              </button>
            </div>
            <div className="col-sm-12" style={styles.space}>
              <Link to='/playerOne'>
                <button type="button" className="btn btn-lg btn-warning">
                  Reselect Players
                </button>
              </Link>
            </div>
          </div>
        </div>
  )
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle