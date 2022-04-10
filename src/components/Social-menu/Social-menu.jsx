import React from 'react';
import './Social-menu.scss';

function SocialMenu() {
  return (
    <>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&display=swap" rel="stylesheet"></link>
        <link href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel = "stylesheet"></link>
        <div className='social-menu'>
            <ul>
                <li><a href = "#" target = "__blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href = "#" target = "__blank"><i class="fa fa-github"></i></a></li>
                <li><a href = "#" target = "__blank"><i class="fa fa-telegram"></i></a></li>
            </ul>
        </div>
    </>
  )
}
 
export default SocialMenu