import './index.css'
import Navbar from './Navbar';
import Appsection from './Appsection';
import Featuresec from './Features';
import Touchsec from './Touchsection';
import Footersec from './Footer';

function App()
{
    return (<header>
        <Navbar/>
        <Appsection/>
        <Featuresec/>
        <Touchsec/>
        <Footersec contact={"Contact us at Instagram"}/>
        <Footersec contact={"You can react via email too"}/>
        <Footersec contact={"NO COPYRIGHT"}/>

        

    </header>)
}
export default App;