import React from 'react'
import './feedback.css'
export const FeedBack = () => {
  return (
    <div className='feedback-box'>
    <form method=''>
    <div className='email'>
    <label htmlFor="email">Email</label>    
    <input type="email" name="email" id="email" placeholder='email' />
    </div>
    <div className="feedback">
    
    <label htmlFor="fb">feedback</label>    
    <textarea name="feedback" id="fb" placeholder='feedback'></textarea>
    </div>
    <input type="submit" value="send" />
    </form>
    
    
    </div>
  )
}
