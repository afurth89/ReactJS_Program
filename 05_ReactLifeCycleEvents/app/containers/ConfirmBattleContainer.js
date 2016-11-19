var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')

// 'Container' components are usually responsible for:
  // STATE and 
  // ROUTING
  // (i.e. the logic)

// They are generally NOT responsible for:
  // Rendering the UI

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // Very FIRST function to run if a route is called where the component is present
  getInitialState() {
    console.log("getInitialState")
    return {
      isLoading: true,
      playersInfo: []
    };
  },

  // Runs BEFORE this component renders to the view
  componentWillMount() {
    console.log("componentWillMount")
  },
  
  // Runs AFTER this component renders to the view
  componentDidMount() {
    console.log("componentDidMount")
    var query = this.props.location.query
    // Fetch info from github, the update state
  },

  // Once component is mounted, if there are props to receive
  componentWillReceiveProps: function(nextProps) {
    console.log("componentWillReceiveProps")
    
  },

  // If you navigate away from that route where the component is present
  componentWillUnmount: function() {
    console.log("componentWillUnmount")
    
  },

  render() {
    // SUPER HELPFUL FOR DEBUGGING
    // console.log(this)
    
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>
    )
  }
})

module.exports = ConfirmBattleContainer