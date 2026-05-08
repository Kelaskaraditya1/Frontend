let Button = ({buttonName, onButtonClick})=>{
  return <button type="button " className={`${'btn btn-secondary'} Button`} onClick={onButtonClick}>{buttonName}</button>
}

export default Button