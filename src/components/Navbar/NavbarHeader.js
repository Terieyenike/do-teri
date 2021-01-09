/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FiAlignRight } from 'react-icons/fi';
import { NavContainer, Header, Div, NavHeader } from './Navbar.style';
// import { Link } from 'react-router-dom';

const NavbarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header>
        <NavContainer>
          <Div>
            <NavHeader>
              <a href='#home'>
                <h1 className='logo'>Teri</h1>
              </a>
              <button type='button' className='nav-btn' onClick={handleToggle}>
                <FiAlignRight className='nav-icon' />
              </button>
            </NavHeader>
            <ul className={isOpen ? 'show-nav nav-links' : 'nav-links'}>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a
                  href='https://terieyenike.medium.com'
                  rel='noopener noreferrer'
                  target='_blank'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#work'>Work</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <a
                  href='https://bit.ly/2Kb4C7u'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='resume'>
                  Resume
                </a>
              </li>
            </ul>
          </Div>
        </NavContainer>
      </Header>
    </>
  );
};

export default NavbarHeader;
