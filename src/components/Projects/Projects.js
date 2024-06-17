import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          최근 <strong className="purple">작업물 </strong>
        </h1>
        <p style={{ color: 'white' }}>최근 만든 작업물들입니다.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="쇼핑몰"
              description="vsc를 이용하여 코딩했고
              Next.js와 tailwind css를 이용했습니다."
              ghLink="https://github.com/MJ174/converse-main"
              demoLink="https://converse-main-peach.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="파이썬,JS 기반 악성코드/바이러스 탐지 웹사이트"
              description="악성코드 점검 웹 사이트를 직접 제작하고 운영함으로써 실습 경험을 했습니다"
              ghLink="https://github.com/MJ174/VIRUS_WEB"
              demoLink="https://nextjs-coral-delta-21.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="반려인들을 위한 포털사이트"
              description="졸업작품으로 개발중인 반려인들을 위한 포털사이트입니다. Express.js, React.js, MongoDB를 사용하여 개발하였습니다"
              ghLink="https://github.com/My-cat-eats-churros/portalsite"
              demoLink="https://portalsite-main.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
