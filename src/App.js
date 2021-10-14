import './App.css';
import NavHeader from './component/navbar';
import Banner from './component/banner';
import What from './component/whathappen';
import Best from './component/bestproduct';
import List from './component/listitems';
import Brand from './component/brandstory';
import Happened from './component/happend';
import Bottom from './component/whatbottom';
import Footer from './component/footer'

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <Banner/>
      <What/>
      <Best/>
      <List/>
      <Brand/>
      <Happened/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
