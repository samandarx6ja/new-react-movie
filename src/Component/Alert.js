const Alert = ({type, message}) => {
  return (
    <div className={`alert alert-${type}`}>
        <i className="fa-solid fa-circle-info"></i>{message}
    </div>
  )
}

export default Alert