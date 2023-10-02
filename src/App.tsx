import React, { useEffect } from 'react';
import 'App.scss';

const App: React.FC = () => {

  useEffect(() => {
    fetch('/getUser', {
      method: 'POST',
    }).then((res) => console.log(res))
  }, [])

  return (
    <div className='main'>
      Hello newcommer!
    </div>
  )
}

export default App; 
