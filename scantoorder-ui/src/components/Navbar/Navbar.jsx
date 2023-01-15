import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useEffect, useState} from 'react';
import Clock from '../widgets/Clock';

function TopNav() {

  const [tableNo, setTableNo] = useState('');
  const [stickyNav, setStickNav] = useState('');
  

  function handleTableNoChange(event) {
    setTableNo(18);
  }

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setStickNav('top') : setStickNav('');
    }
  };

  useEffect(() => {
    handleTableNoChange();
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  
  return (
    <Navbar bg='light' fixed={stickyNav}>
    <Container>
      <Navbar.Brand href="#home">Wingheng</Navbar.Brand>
      <Navbar.Text>
        Table No: {tableNo}
      </Navbar.Text>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        </Navbar.Text>
        <DropdownButton
              key='down-centered'
              align="end"
              id='dropdown-button-drop-down-centered'
              drop='down-centered'
              variant="secondary"
              title='Filter by'
            ><Dropdown.Item eventKey="3">Food</Dropdown.Item>
            <Dropdown.Item eventKey="3">Drink</Dropdown.Item>
          
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Most ordered food</Dropdown.Item>
              <Dropdown.Item eventKey="4">Recommendation</Dropdown.Item>
            </DropdownButton>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export {TopNav};