import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Icon2 from './Components/Icons2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";
import {React,useState} from 'react';
const itemArray = new Array(9).fill("empty");
function App() {
  const [isCross, SetisCross]  =useState(false);
  const [winner, Setwinner] = useState("");

  const reloadgame = () => {
    SetisCross(false);
    Setwinner("");
    itemArray.fill("empty",0,9);
  };
  const checkiswinner = () => {
    if(itemArray[0] !=="empty" && itemArray[1]===itemArray[0] && itemArray[1]===itemArray[2])
    {
      Setwinner(`${itemArray[0]} wins`);
    }
    if(itemArray[3] !=="empty" && itemArray[4]===itemArray[3] && itemArray[4]===itemArray[5])
    {
      Setwinner(`${itemArray[3]} wins`)
    }
    if(itemArray[6]!=="empty" && itemArray[6]===itemArray[7] && itemArray[7]===itemArray[8])
     {
      Setwinner(`${itemArray[6]} wins`)

     }
     if(itemArray[0]!=="empty" && itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6])
     {
      Setwinner(`${itemArray[0]} wins`)
     }
     if(itemArray[1]!=="empty" && itemArray[1]===itemArray[4] && itemArray[4]===itemArray[7])
     {
      Setwinner(`${itemArray[1]} wins`)
     }
     if(itemArray[2]!=="empty" && itemArray[5]===itemArray[2] && itemArray[5]===itemArray[8])
     {
      Setwinner(`${itemArray[2]} wins`)
     }
     if(itemArray[2]!=="empty" && itemArray[2]===itemArray[4] && itemArray[4]===itemArray[6])
     {
      Setwinner(`${itemArray[2]} wins`)
     }
     if(itemArray[0]!=="empty" && itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8])
     {
      Setwinner(`${itemArray[0]} wins`)
     }

  };
  const changeItem = itemnumber =>  {
       if(winner){
        return toast(winner,{type: "success"});
       }
       if(itemArray[itemnumber]==="empty")
       {
           itemArray[itemnumber]=isCross? "cross":"circle";
           SetisCross(!isCross);
           
       }
       else
       {
         return toast("already filled",{type:"error"});
       }
       checkiswinner();
  };
  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center'/>
      <Row>
        <Col md={6} className="offset-md-3">
          {
            winner ? (
              <div class="mb-2 mt-2">
                <h1 className="text-primary text-uppercase text-center">
                  {winner}
                </h1>
                <Button color="success" block onClick={reloadgame}>Reload game</Button>
              </div>
            ) : (
              <h1 className='text-center text-warning'>
                {isCross?"Cross":"Circle"}turns
              </h1>
            )
          }
          <div class="grid">
            {itemArray.map((item,index) => (
            <Card color="warning" onClick={() =>  changeItem(index)}>
              <CardBody className='box'>
                <p>{item}</p>
                <Icon2 name={item}/>
              </CardBody>
            </Card>
            ))}

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
