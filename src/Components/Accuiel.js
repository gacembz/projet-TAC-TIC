import { Carousel,CarouselItem, ThemeProvider } from "react-bootstrap";
import Footer from "./Footer";
import "./Accuiel.css"
import SujetListe from "./SujetListe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "@chakra-ui/react";
import { Chip, Icon } from "@mui/material";
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from "react-router-dom";

function Accuiel() {
  return (
    
    <div className="ACC">
    
    <Carousel className="caro">
      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlYW13b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
          src="https://plus.unsplash.com/premium_photo-1661763708192-89c76106cb1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRlYW13b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
    <div>
    <h2>Des milliers de références disponibles : consulte nos rapports de stage:</h2>
    <h3>Les plus consultés</h3>
    <ul>
<li><a href="https://www.rapport-de-stage.com/entreprises-et-gestion/management-et-organisation/rapport-de-stage/aide-domicile-auxiliaire-vie-495430.html">Rapport de stage effectué en entreprise d'aide à domicile : auxiliaire de vie</a></li>
    <li><a href="https://www.rapport-de-stage.com/politique-et-international/questions-sociales/rapport-de-stage/intervention-sociale-aide-personne-isap-centre-medico-social-suivi-famille-493199.html">Intervention sociale d'aide à la personne (ISAP) dans un centre Médico-Social : le suivi d'une famille</a></li>
    <li><a href="https://www.rapport-de-stage.com/politique-et-international/questions-sociales/rapport-de-stage/partenariat-reseau-cadre-service-prevention-specialisee-epreuve-certification-dc4-2-493926.html">Partenariat et Réseau dans le cadre d'un service de prévention spécialisée - épreuve de certification du DC4.2</a></li>
    <li><a href="https://www.rapport-de-stage.com/politique-et-international/questions-sociales/rapport-de-stage/dynamiques-institutionnelles-inter-institutionnelles-partenariales-sein-hopital-enfants-496721.html">Dynamiques institutionnelles, inter-institutionnelles et partenariales au sein d'un hôpital d'enfants</a></li>
    <li><a href="https://www.rapport-de-stage.com/sciences-et-technologies/medecine/rapport-de-stage/analyse-situation-portant-hygiene-hospitaliere-hygiene-mains-496741.html">Analyse d'une situation portant sur l'hygiène hospitalière: l'hygiène des mains</a></li>
    <li></li>
    </ul>
    </div>
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
   
    
    </div>
<Footer/>


    </div>
   
  ); 
} 


export default Accuiel;