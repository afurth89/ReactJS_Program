var USER_DATA = {
  name: 'Andrew Furth',
  username: 'afurth89',
  image: 'https://avatars3.githubusercontent.com/u/12887095?v=3&s=460'
}

var React = require('react')
var ReactDOM = require('react-dom')

// React render method
// fn(data) = View

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    )
  }
});









ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
)