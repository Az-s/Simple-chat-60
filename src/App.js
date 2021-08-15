import './App.css';
import Navbar from './components/Navbar/Navbar';
import CommentsSide from './components/CommentsSide/CommentsSide';
import Comment from './components/Comment/Comment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <Comment />
        <CommentsSide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
