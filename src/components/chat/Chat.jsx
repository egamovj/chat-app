import React from 'react'

import './chat.css'
import avatar from '../../../public/avatar.png'
import phone from '../../../public/phone.png'
import video from '../../../public/video.png'
import info from '../../../public/info.png'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src={avatar} alt='Avatar' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className='icons'>
          <img src={phone} alt='Phone' /> 
          <img src={video} alt='Video' /> 
          <img src={info} alt='Info' /> 
        </div>
      </div>
      <div className='center'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default Chat
