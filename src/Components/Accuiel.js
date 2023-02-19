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
          src="https://img.freepik.com/vecteurs-libre/rapport-annuel-du-pack-affaires-design-plat-dessine-main_23-2149377303.jpg?size=626&ext=jpg&ga=GA1.2.1135844122.1676491966&semt=ais"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Exemple de rapport de stage : inspirez-vous de notre modèleL</h3>
          <p>'Etudiant vous propose une trame, constituée d'un plan type, pouvant s'appliquer à la plupart des rapports de stage. Découvrez nos conseils et notre modèle de rapport de stage.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://img.freepik.com/vecteurs-premium/bonne-annee-2023-illustrations-uniques-pour-marque-affiches-bannieres-couvertures-cartes_640440-85.jpg?size=626&ext=jpg&ga=GA1.2.1135844122.1676491966&semt=ais"
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
          src="https://img.freepik.com/vecteurs-libre/creative-mosaic-2023-poster-template-background-illustration-vectorielle_1142-13140.jpg?size=626&ext=jpg&ga=GA1.2.1135844122.1676491966&semt=ais"
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