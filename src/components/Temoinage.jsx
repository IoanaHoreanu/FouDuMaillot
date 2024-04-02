import "../styles/Temoinages.css"
import { useState } from 'react';

const Temoinage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'J\'ai commandé un maillot personnalisé et je suis très satisfait du résultat ! La qualité est excellente et le service client était super.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'J\'ai reçu ma commande très rapidement et le maillot était exactement comme je l\'avais imaginé. Je recommande vivement !',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      comment: 'Je suis un client fidèle depuis des années et je n\'ai jamais été déçu. Leurs maillots personnalisés sont parfaits pour mon équipe !',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <div className="prev" onClick={prevTestimonial}>◄</div>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>{testimonials[currentIndex].comment}</p>
            <p>- {testimonials[currentIndex].name}</p>
          </div>
        </div>
        <div className="next" onClick={nextTestimonial}>►</div>
      </div>
    </div>
  );
};

export default Temoinage;
