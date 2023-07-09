import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../asset/css/custom-styles.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldHideMenuItem: false,
      scrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const currentUrl = window.location.href;
    const shouldHideMenuItem = currentUrl.includes('#blog');
    this.setState({ shouldHideMenuItem });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (scrollTop === 0 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const { shouldHideMenuItem, scrolled } = this.state;

    return (
      <Fragment>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={scrolled ? 'dark' : 'light'}
          className={scrolled ? 'dark' : ''}
        >
          <Container>
            <Navbar.Brand href="/" className="center_div" >
              MLibrarian
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav className="me-auto">
                {!shouldHideMenuItem && <Nav.Link href="#blog"></Nav.Link>}
              </Nav>

              
              <Nav>
                <Nav.Link eventKey={2} href="/hotels">
                  Books
                </Nav.Link>
                <Nav.Link eventKey={2} href="https://bcas.lk">
                  BCAS
                </Nav.Link>
                <Nav.Link eventKey={2} href="/Login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Menu;
