import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';

function Home() {
  return (
    <div>
      <Page title='Select one of the options'>
        <div>
          <Link to='/create-appointment'>
            <Button className='m-2'>Create appointment</Button>
          </Link>

          <Link to='/show-appointments'>
            <Button>Show appointments</Button>
          </Link>
        </div>
      </Page>
    </div>
  );
}

export default Home;