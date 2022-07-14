import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import News from './components/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect ( () =>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-06-12&sortBy=publishedAt&apiKey=6fbb1a557c9f40859632c43f246a1c4b')
    .then(res => res.json())
    .then(data=>setNews(data.articles));
  },[]);

  return (
    <div className="App">
      <Button variant='secondary'>button</Button>
      <Row xs={1} md={3} className="g-4">
      {
        news.map(nw => <News news={nw}></News>)
      }
      
    </Row>
    </div>
  );
}

export default App;
