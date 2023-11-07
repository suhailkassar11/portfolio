import React from 'react'

const NavigationDots = ({active}) => {
const NavItems=['home','about','work','skills','contact']
  return (
    <div className='app__navigation'>
        {NavItems.map((item,index)=>(
            <a className='app__navigation-dot' key={index} href={`#${item}`} style={active===item?{backgroundColor:'#313BAC'}:{ }}/>
            ))}
    </div>
  )
}

export default NavigationDots
