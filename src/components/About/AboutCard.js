import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            안녕하세요, 저는{' '}
            <span className="purple">Shin Myongjin 입니다. </span>
            한국에서 <span className="purple"> 공부중입니다. </span>
            <br />
            저는 현재 중부대학교에서 재학중인 학생입니다.
            <br />
            <br />
            코딩 외에도 제가 좋아하는 활동이 있어요!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "세상을 행복하게 살아갔으면 좋겠어요"
          </p>
          <footer className="blockquote-footer">명진</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
