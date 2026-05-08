import './Container.css'

let Container = ({children})=>{
  return <div className='healthy-list'>
    {children}
  </div>
}

export default Container;