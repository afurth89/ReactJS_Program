var React = require('react')
var Prompt = require('../components/Prompt')

// 'Container' components are usually responsible for:
  // STATE and 
  // ROUTING
  // (i.e. the logic)

// They are generally NOT responsible for:
  // Rendering the UI

var PromptContainer = React.createClass({
  

  // If you want to do any kind of dynamic routing, 
  // you need to grab 'router' off of 'contextTypes'
      // because then you don't have to pass router
      // as a prop to your components and keep passing down until you need it
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // usually you set the initial state as an empty data type
    // '' or [] or {] etc.
  getInitialState: function() {
    return {
      username: ''
    }
  },

  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  // The actual function itself
    // starts with the "handle" prefix

  handleSubmitUser: function(e) {
    e.preventDefault()
    var username = this.state.username
    this.setState({
      username: ''
    })

    // the URL for the playerTwo route has a route param of playerOne's username
    // if that route param exists, we must be on the playerTwo route already
    if (this.props.routeParams.playerOne) {
      // console.log(this.context)
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
      
    } else {
      // console.log(this.context)
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  
  render() {
    // SUPER HELPFUL FOR DEBUGGING
    // console.log(this)
    
    return (
      // Props that you pass to other components as functions
        // start with the "on" prefix
      <Prompt 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
})

module.exports = PromptContainer