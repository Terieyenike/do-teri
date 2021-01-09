/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '../Container/';
import {
  Section,
  Div,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  Paragraph,
} from './Footer.style';
import {
  FiTwitter,
  FiLinkedin,
  FiCodepen,
  FiGithub,
  FiInstagram,
} from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Section>
        <Container>
          <Div>
            <FirstColumn>
              <Paragraph>&copy; {year} Teri.</Paragraph>
            </FirstColumn>
            <SecondColumn>
              <Paragraph>
                <a
                  href='https://github.com/terieyenike/v2'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Designed & Built by Teri Eyenike
                </a>
              </Paragraph>
            </SecondColumn>
            <ThirdColumn>
              <p className='friend'>Let's be friends</p>
              <a
                href='https://github.com/terieyenike/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='github'>
                <span>
                  <FiGithub />
                </span>
              </a>
              <a
                href='https://twitter.com/terieyenike'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='twitter'>
                <span>
                  <FiTwitter />
                </span>
              </a>
              <a
                href='https://linkedin.com/in/terieyenike'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='linkedin'>
                <span>
                  <FiLinkedin />
                </span>
              </a>
              <a
                href='https://codepen.io/terieyenike/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='codepen'>
                <span>
                  <FiCodepen />
                </span>
              </a>

              <a
                href='https://instagram.com/terieyenike/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='instagram'>
                <span>
                  <FiInstagram />
                </span>
              </a>
            </ThirdColumn>
          </Div>
        </Container>
      </Section>
    </>
  );
};

export default Footer;
