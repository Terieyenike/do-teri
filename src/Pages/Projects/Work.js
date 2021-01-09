/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Section, Div, Box, Icons } from './Work.style';
import Container from '../../components/Container';
import Placeholder from '../../components/Placeholder/Placeholder';
import projects from '../../allprojects';
import { FiGithub, FiGlobe } from 'react-icons/fi';

class Work extends React.Component {
  state = {
    itemsToShow: 6,
    expanded: false,
  };

  showMore = () => {
    this.state.itemsToShow === 6
      ? this.setState({ itemsToShow: projects.length, expanded: true })
      : this.setState({ itemsToShow: 6, expanded: false });
  };

  render() {
    return (
      <>
        <Section id='work'>
          <Container>
            <Placeholder title='Projects'></Placeholder>
            <Div>
              {projects.slice(0, this.state.itemsToShow).map((project) => {
                return (
                  <Box key={project.id}>
                    <Icons>
                      <a
                        href={project.source}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='go to repo'>
                        <FiGithub className='icons' />
                      </a>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='view on your browser'>
                        <FiGlobe className='icons' />
                      </a>
                    </Icons>
                    <h2>{project.title}</h2>
                    <p className='desc'>{project.description}</p>
                    {/* <Tools>
                    <p></p>
                  </Tools> */}
                  </Box>
                );
              })}
            </Div>
            <a onClick={this.showMore} className='show'>
              {this.state.expanded ? 'Show Less' : 'Show More'}
            </a>
          </Container>
        </Section>
      </>
    );
  }
}

// const Work = () => {
//   const [itemsToShow, setItemsToShow] = useState(4);
//   const [expanded, setExpanded] = useState(false);

//   const showMore = () => {
//     itemsToShow === 4 ? setItemsToShow(itemsToShow: projects.length), setExpanded(true} : )
//   };

export default Work;
