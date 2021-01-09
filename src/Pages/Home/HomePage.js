/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '../../components/Container';
import { Main, Section } from './Home.style';
import About from '../About/About';
import Work from '../Projects/Work';
import Contact from '../Contact/Contact';
import MailTo from '../../components/MailTo/MailTo';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Main>
        <Section id='home'>
          <Container>
            <h1>Hey, I'm</h1>
            <h2>Teri Eyenike.</h2>
            <h3>I build things for the web.</h3>
            <p>
              I'm a software engineer based in Lagos, Nigeria specialising in
              building applications and using technologies making websites
              accessible for all.
            </p>
            <MailTo
              email='developedbyteri@gmail.com'
              subject='Available for work?'
              body='Hey Teri,'>
              Get in Touch
            </MailTo>
          </Container>
        </Section>
        <About />
        <Work />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};

export default Home;
