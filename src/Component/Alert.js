const Alert = ({type, messasge}) => {
  return (
    <div className={`alert alert-${type}`}>
        <i className="fa-solid fa-circle-info"></i>{messasge}
    </div>
  )
}

export default Alert