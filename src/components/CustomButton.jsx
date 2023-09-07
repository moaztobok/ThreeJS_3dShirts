import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'
const CustomButton = ({title,type,customeStyles,handleClick}) => {
  const snap = useSnapshot(state)
  const generateStyle = (type) =>{
    if(type === 'filled')
    {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }else if(type ==='outline'){
    return {
      borderWidth: '1px',
      color: getContrastingColor(snap.color),
      borderColor: getContrastingColor(snap.color),
    }
  }}
  return (
    <button
    onClick={handleClick}
    className={`px-2 py-1.5 flex-1 rounded-md 
    ${customeStyles}`}
    style={generateStyle(type)}>{title}</button>
  )
}

export default CustomButton