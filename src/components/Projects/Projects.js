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
        <p style={{ color: 'white' }}>이번 학기동안 만든 작업물들입니다.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="쇼핑몰"
              description="vsc를 이용하여 코딩했고
              javascipts와 tailwind css를 이용했습니다."
              ghLink="https://nextmall-navy.vercel.app/"
              demoLink="https://nextmall-navy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NEXT-JS를 이용한 나의 홈페이지 만들기"
              description="이제 처음 js를 배우면서 하게 된 프로젝트인데
              홈페이지 디자인과 백엔드와 프론트엔드를 다룰수 있게 되었습니다."
              ghLink="https://github.com/MJ174/next-js"
              demoLink="https://nextjs-coral-delta-21.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="중고거래 장터"
              description="기말고사 과제로 4명이서 한 중부 중고거래 장터입니다. 직거래 기반으로 만들었고 채팅기능과 게시판 그리고 판매물품등록등 다양한 기능을 넣었습니다."
              ghLink="https://github.com/JBmarket/JBmarket"
              demoLink="http://localhost:3000"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
