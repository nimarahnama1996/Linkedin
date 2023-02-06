import React, { Fragment } from 'react'
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import {AiFillHome,AiFillMessage,AiOutlineSearch} from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {IoIosNotifications} from 'react-icons/io'



import './header.css'



import logo from '../../assets/images/logo.webp'
import profile from '../../assets/images/ava-4.jpg'


const nav__links = [
  {
    display: "Home",
    path: "/home",
    icon:<AiFillHome/>
  },
  {
    display: "My Network",
    path: "/mynetwork",
    icon:<BsPeopleFill/>
  },
  {
    display: "Jobs",
    path: "/jobs",
    icon:<MdWork/>
  },
  {
    display: "Messaging",
    path: "/messaging",
    icon:<AiFillMessage/>
    
  },
  {
    display: "Notifications",
    path: "/notifications",
    icon:<IoIosNotifications/>
  },
];



const Header = () => {
  return (
   <Fragment>
     <header className="header">
     <Container>
      
      <div className='nav-wrapper '>

        <div className='logo'>
          <img src={logo} alt='logo'/>
          <input type='text' placeholder='Search'/>
        </div>

         <div>
          <ul>

            <li>
              <Link to='/'>
                <div className='nav-icon'>
                <AiFillHome/>
                </div>
                <div className='nav-name'>
                  Home
                </div>
              </Link>
            </li>

            <li>
              <Link to='/mynetwork'>
                <div className='nav-icon'>
                <BsPeopleFill/>
                </div>
                <div className='nav-name'>
                My Network
                </div>
              </Link>
            </li>

            <li>
              <Link to='/jobs'>
                <div className='nav-icon'>
                <MdWork/>
                </div>
                <div className='nav-name'>
                Jobs
                </div>
              </Link>
            </li>

            <li>
              <Link to='/messaging'>
                <div className='nav-icon'>
                <AiFillMessage/>
                </div>
                <div className='nav-name'>
                Messaging
                </div>
              </Link>
            </li>

            <li>
              <Link to='/notifications'>
                <div className='nav-icon'>
                <IoIosNotifications/>
                </div>
                <div className='nav-name'>
                Notifications
                </div>
              </Link>
            </li>

            <li>
              
                <div className='nav-icon'>
                 <img src={profile} alt='profile' style={{marginTop:'6px'}}/>
                </div>
                <div className='nav-name'  style={{marginTop:'4px'}}>
                Me
                </div>
              
            </li>
          </ul>
         </div>

        
      </div>

     </Container>
     </header>
   </Fragment>
  )
}

export default Header