
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Slider from"./components/Slider";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions';


const data = require('./data/data.json');


function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio} />
      <Slider start={data.banner.start} />
      <Offers offer ={data.offer} />
      <Heading text= "STAR PRODUCTS" />
      <StarProduct starProduct = {data.starProduct} />
      <Heading text= "HOT ACCESSORIES" />
      <HotAccessoriesMenu/>
      <Routes>
        <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}  />  
        <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}  />  
        <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}  />  
        <Route exact path='/lifeStyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}  />  
        <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}  />    
      </Routes>
      <Footer footer={data.footer.support} shop={data.footer.shopAndLearn} retail={data.footer.retailStore} about={data.footer.aboutUS} contact={data.footer.contactUs}  />
      
    </Router>
  );
}

export default App;
