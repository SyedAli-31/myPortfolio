import React from 'react'
interface propsType{
    title:string;
}

const Heading:React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-2'>{title}</div>
  )
}

export default Heading;