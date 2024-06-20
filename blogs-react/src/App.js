import img1 from './image/red33.jpg';
import './App.css';
//import Page from './pages/Page'
import BlogList from './components/blog-list';

function App() {
  return (
    <>
    <div className="App">
    <img src={img1} alt=""/>
    </div>
    <BlogList></BlogList>
    </>
    
  
   
  );
}

export default App;
