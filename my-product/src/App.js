import logo from './logo.svg';
import './App.css';
import blog3 from './img/blue22.jpg'
import blog1 from './img/black22.jpg'
import blog2 from './img/black sh.jpg'
import blog4 from './img/blue.jpg'
import blog5 from './img/bata.jpg'

function App() {
  return (
    <>
    <section className="content">
       <h1>New Arrivals</h1>
       <p>get the best product</p>
       <button>Shop now</button>

    </section>
    <h1 className="heading">our new product</h1>

    <section>
      <div className="products">

        <div className="cards">
          <div className="img"><img src={blog3} alt=""/></div>
          <div className="desc">Women</div>
          <div className="title">ladyshoe</div>
          <div className="box">
            <div className="price">560 </div>
            <button className="btn">Buy now</button>
          </div>
        </div>

        <div className="cards">
          <div className="img"><img src={blog1} alt=""/></div>
          <div className="desc">Women</div>
          <div className="title">ladyshoe</div>
          <div className="box">
            <div className="price">560 </div>
            <button className="btn">Buy now</button>
          </div>
        </div>

        <div className="cards">
          <div className="img"><img src={blog2} alt=""/></div>
          <div className="desc">Women</div>
          <div className="title">ladyshoe</div>
          <div className="box">
            <div className="price">560 </div>
            <button className="btn">Buy now</button>
          </div>
        </div>

        <div className="cards">
          <div className="img"><img src={blog4} alt=""/></div>
          <div className="desc">Women</div>
          <div className="title">ladyshoe</div>
          <div className="box">
            <div className="price">560 </div>
            <button className="btn">Buy now</button>
          </div>
        </div>

        <div className="cards">
          <div className="img"><img src={blog5} alt=""/></div>
          <div className="desc">Women</div>
          <div className="title">ladyshoe</div>
          <div className="box">
            <div className="price">560 </div>
            <button className="btn">Buy now</button>
          </div>
        </div>


      </div>
    </section>
    </>

  );
}

export default App;
