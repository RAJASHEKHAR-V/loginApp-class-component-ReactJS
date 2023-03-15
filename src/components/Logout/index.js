import './index.css'

const LogOutButton = props => {
  const {status, event} = props

  return (
    <button className="logout-button" type="submit" onClick={event}>
      {status}
    </button>
  )
}

export default LogOutButton
