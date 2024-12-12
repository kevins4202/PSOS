import { Container, Row, Col } from 'react-bootstrap';
import instaIcon from '../assets/icons/insta.svg';
import tiktokIcon from '../assets/icons/tiktok.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid as="footer" className="d-flex flex-wrap justify-content-between align-items-center" 
      style={{ 
        backgroundColor: '#ffcbc4',
        height: '100px',
        bottom: 0,
        padding: '0 20px'
      }}>
      <Col md={4} className="d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-muted">
          © Project Save our Skin, {currentYear}
        </span>
      </Col>

      <Col md={4}>
        <Row className="justify-content-end align-items-center">
          <Col className="text-end">
            <span style={{ fontFamily: 'Marmelad', paddingRight: '5px' }}>
              projectsaveourskin@gmail.com
            </span>
            <a href="https://www.instagram.com/projectsaveourskin/?next=%2Fsophiaxxia%2F" 
              target="_blank" 
              rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" 
                style={{ height: '55px', marginRight: '15px' }} />
            </a>
            <a href="https://www.tiktok.com/@projectsaveourskin?_t=8XF7iTY6Ozr%_r=1" 
              target="_blank" 
              rel="noopener noreferrer">
              <img src={tiktokIcon} alt="TikTok" 
                style={{ height: '40px', marginTop: '6px', marginRight: '15px' }} />
            </a>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Footer;
