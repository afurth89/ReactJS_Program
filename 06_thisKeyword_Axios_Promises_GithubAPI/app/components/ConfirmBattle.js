var React = require('react')

// PUKE TRICK: places props onto screen to easily check if they're correct
function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return (
    props.isLoading
      ? <p>LOADING!</p>
      : <div>CONFIRM BATTLE!: {puke(props)}</div>
  )
}

module.exports = ConfirmBattle