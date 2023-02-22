import { Carousel,CarouselItem, ThemeProvider } from "react-bootstrap";
import Footer from "./Footer";
import "./Accuiel.css"
import SujetListe from "./SujetListe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "@chakra-ui/react";
import { Chip, Icon } from "@mui/material";
import Person3Icon from '@mui/icons-material/Person3';

function Accuiel() {
  return (
    <div className="ACC">
    <Carousel className="caro">
      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src="data:image/png;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Exemple de rapport de stage : inspirez-vous de notre modèleL</h3>
          <p>'Etudiant vous propose une trame, constituée d'un plan type, pouvant s'appliquer à la plupart des rapports de stage. Découvrez nos conseils et notre modèle de rapport de stage.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGjuphyrYy77kqI7iuwXQQz16IobDs3WKOA&usqp=CAU"
          alt="Second slide"
          
        />

        <Carousel.Caption>
          <h3>Exemples de thèmes pour un rapport de stage en contrôle de gestion</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8vzbPPUQ1Xbs7SzOprG2Us3RoJFSZ2V0sw&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>

          <h3>Comment faire la conclusion du rapport de stage ? </h3>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
   
    <div className="div1">
    <div className="div2">
    <h3 className="H3">introduction:</h3>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
     <button className='loginBtn'>Go somewhere</button>
    </div>
    <div className="div3">
    <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXe3GBJvg9NgKbuKe05qDLKg6CLYfzF7XqtQ&usqp=CAU" alt="test"></img>
    
    
    </div>
    </div>
    
    <SujetListe/>
    
    <h3 className="titre">chiffers cles</h3>
    <div className="d1">
    
    <div ><ThemeProvider theme={theme}>
  
  <Chip icon={<Icon className="icon1" />} label="Call me" />
</ThemeProvider>
    <h3 className="TEXT">contacts</h3>
    <h3>76</h3>
    </div>
     
    <div ><ThemeProvider theme={theme}>
  
  <Chip icon={<Icon className="icon1" />} label="Call me" />
</ThemeProvider>
    <h3 className="TEXT">Sujets</h3>
    <h3><i className="fa-solid fa-user w-25"></i>3000</h3>
    </div>
     
    <div >
  <i class="fa-solid fa-input-numeric"></i>
    <h3 className="TEXT">stagaries</h3>
    <h3>250</h3>
    
    </div>
    <div></div>
    
    </div>
<Footer/>


    </div>
   
  ); 
} 


export default Accuiel;