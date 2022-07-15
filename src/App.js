import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import News from './components/News';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [news, setNews] = useState([]);
  useEffect ( () =>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-06-15&sortBy=publishedAt&apiKey=6fbb1a557c9f40859632c43f246a1c4b')
    .then(res => res.json())
    .then(data=>setNews(data.articles));
  
  },[]);

  return (
    <div className="App">
      
      {
        news.length ===0 ? 
        <Spinner animation="border" variant="primary" />
        :
        <Row xs={1} md={3} className="g-4">
      {
        news.map(nw => <News news={nw}></News>)
      }
    </Row>
      }

    </div>
  );
}

export default App;
