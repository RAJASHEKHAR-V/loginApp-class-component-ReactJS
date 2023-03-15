import './index.css'

const LogInButton = props => {
  const {status, event} = props

  return (
    <button className="login-button" type="submit" onClick={event}>
      {status}
    </button>
  )
}

export default LogInButton
