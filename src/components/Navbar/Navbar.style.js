import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em 2em;
  z-index: 1;
  background: #040f16;
`;
export const NavContainer = styled.div`
  .nav-links {
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-top: 1.5em;
  }

  li + li {
    margin-top: 2em;
  }
  .nav-links a {
    display: block;
    transition: all 0.3s linear;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-align: center;
  }

  .nav-links a:hover {
    color: #ffc857;
  }
  .show-nav {
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    .nav-btn {
      display: none;
    }
    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-links a {
      font-size: 1.3rem;
    }
    li + li {
      margin: 0 0 0 2em;
    }
  }
`;
export const Div = styled.div`
  .resume {
    color: #ffc857;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: #ffc857;
    font-weight: 600;
    font-size: 2rem;
  }
  .nav-btn {
    background: transparent;
    border: unset;
    cursor: pointer;
  }
  .nav-icon {
    font-size: 2.5rem;
    color: #ffc857;
  }
`;

// export const NavContainer = styled.div`
//   /* padding: 1em 0; */
//   position: fixed;
//   width: 100%;
//   z-index: 10;
//   box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
//   background: white;
// `;

// export const Header = styled.header`
//   padding: 1em 0 0;
//   @media screen and (min-width: 768px) {
//     padding: 1em 0;
//   }
// `

// export const NavWrapper = styled.div`
//   @media screen and (min-width: 768px) {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
// `;

// export const NavLogo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .toggle-icon {
//     font-size: 4.5rem;
//     cursor: pointer;
//   }
//   @media screen and (min-width: 768px) {
//     .toggle-icon {
//       display: none;
//     }
//   }
// `;

// export const NavLogoWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   img {
//     width: 15%;
//     border-radius: 50%;
//     margin-right: 0.85em;
//   }
//   a {
//     text-decoration: none;
//     font-weight: 700;
//   }

//   .logo {
//     font-size: 1.5rem;
//   }
//   @media screen and (min-width: 768px) {
//     img {
//       width: 7%;
//     }
//     .logo {
//       font-size: 1.85rem;
//     }
//   }
// `;

// export const LinkWrapper = styled.nav`
//   height: ${({ open }) => (open ? '110px' : '0px')};
//   overflow: hidden;
//   transition: all 1s ease-in-out;
//   margin-top: 1em;
//   .nav__link, .tweet {
//     font-size: 1.5rem;
//     font-family: Montserrat, sans-serif;
//   }
//   a {
//     text-decoration: none;
//     font-weight: 700;
//     color: #636363;
//   }

//   .fitwitter {
//     font-weight: 400;
//     font-size: 1.5rem;
//   }

//   .nav__item + .nav__item {
//     margin-top: 1em;
//   }

//   @media screen and (min-width: 768px) {
//     margin: 0;
//     height: auto;
//     .nav__link {
//       font-size: 1.5rem;
//     }
//     ul {
//       display: flex;
//       align-items: center;
//       width: 100%;
//     }
//     .tweet {
//       display: none;
//     }
//   }
// `;
