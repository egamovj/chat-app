import React from 'react'

import More from '../../../../public/more.png'
import Video from '../../../../public/video.png'
import Edit from '../../../../public/edit.png'
import avatar from '../../../../public/avatar.png'
import './userInfo.css'

const Userinfo = () => {
  return (
    <div className='userInfo'>
        <div className='user'>
            <img src={avatar} alt='Avatar' />
            <h2>John Doe</h2>
        </div>
        <div className='icons'>
            <img src={More} alt='More icon' />
            <img src={Video} alt='Video icon' />
            <img src={Edit} alt='Edit icon' />
        </div>
    </div>
  )
}

export default Userinfo
