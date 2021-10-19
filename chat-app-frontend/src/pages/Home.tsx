import Home from '../components/Home';

interface propsData {
  socket: any;
}

const HomePage = (props: propsData) => {
  return <Home socket={props.socket} />;
};

export default HomePage;
