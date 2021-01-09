import React from 'react';
import { Section, AboutMe, Left, Ul } from './About.style';
import Container from '../../components/Container';
import Placeholder from '../../components/Placeholder/Placeholder';
import T from './T.jpg';

const About = () => {
  return (
    <>
      <Section>
        <Container>
          <Placeholder title='About Me'></Placeholder>
          <AboutMe id='about'>
            <Left>
              <p>
                Hello! I'm Teri, a software engineer based in Lagos, Nigeria.
              </p>

              <p>
                I love to learn, build, and write about the technology stack I
                use. Learning is part of what gives me the drive to want to do
                more and build products that provide pixel-perfect and
                performant experiences.
              </p>
              <p>
                If I'm not coding or learning something new in technology, I'm
                possibly engaged with watching documentaries, nature, and art
                through photography creating moment in pixels through the lens
                of my camera.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <Ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & (S)CSS</li>

                <li>Next.js</li>
                <li>Python</li>
                <li>Redux</li>
                <li>PostgreSQL</li>
              </Ul>
            </Left>

            <img src={T} alt='About me' />
          </AboutMe>
        </Container>
      </Section>
    </>
  );
};

export default About;
