
// React render method
// fn(data) = View

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

/*
{this.props.children} is whatever is in between
the acutal opening and closing of the component
(see <Link> component below, where {this.props.username}
is in between the opening and closing of the <Link> tag
and thus is equal to {this.props.children} for the <Link>
tag)
*/

// var Link = React.createClass({
//   changeURL: function () {
//     window.location.replace(this.props.href)
//   },

//   render: function() {
//     return (
//       <span 
//         style={{color: 'blue', cursor: 'pointer'}}
//         onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// })

// var ProfileLink = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     )
//   }
// });


var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes')



ReactDOM.render(
  routes,
  document.getElementById('app')
)