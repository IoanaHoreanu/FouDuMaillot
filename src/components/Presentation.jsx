/* eslint-disable react/no-unescaped-entities */
import "../styles/Presentation.css"
import backgroundImage from '../assets/foot4.jpg';
const BrandPresentation = () => {
    return (
        <div className="brand-presentation" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <h2>FOUDUMAILLOT</h2>
          <p>Nous sommes Foudumaillot, une entreprise passionnée par la personnalisation de maillots de football. Notre mission est de fournir des maillots de haute qualité, personnalisés selon les besoins et les préférences de nos clients.</p>
          <p>Ce qui nous distingue des autres sites de personnalisation de maillots, c'est notre engagement envers l'excellence dans la qualité des produits, notre service client exceptionnel et notre approche personnalisée à chaque commande.</p>
          <p>Que vous soyez un joueur amateur, un club de football ou un fan passionné, nous sommes là pour vous aider à créer le maillot parfait qui correspond à votre style et à votre identité.</p>
        </div>
      </div>
    );
  };
  
  export default BrandPresentation;
