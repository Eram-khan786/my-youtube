import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const List=['All','Mixes','Bollywood','News','Comedy','Watched','Live','Music','Mithoon','Programming','Cricket','Cooking','Gaming','Songs']
  return (
    <div className='flex p-4'>
      {
        List.map((ele,index)=><Button key={index} name={ele}/>
        )
      }
    </div>
  )
}

export default ButtonList;