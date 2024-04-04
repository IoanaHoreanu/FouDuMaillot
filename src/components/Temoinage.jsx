import { useState } from 'react';
import "../styles/Temoinages.css";

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
    {
      id: 4,
      name: 'Alice Brown',
      comment: 'La personnalisation de mon maillot a été un jeu d\'enfant et le résultat final était incroyable. Merci Foudumaillot !',
    },
    {
      id: 5,
      name: 'David Wilson',
      comment: 'Je suis très impressionné par la qualité des maillots et le professionnalisme de l\'équipe de Foudumaillot. Je reviendrai sûrement !',
    },
    {
      id: 6,
      name: 'Sarah Miller',
      comment: 'J\'adore la variété d\'options de personnalisation disponibles. Mon maillot est unique et exactement ce que je voulais.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 2 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 2 : currentIndex - 1);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <div className="prev" onClick={prevTestimonial}>◄</div>
        <div className="testimonial-list">
          {[testimonials[currentIndex], testimonials[currentIndex + 1]].map(testimonial => (
            <div className="testimonial" key={testimonial.id}>
              <p>{testimonial.comment}</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="next" onClick={nextTestimonial}>►</div>
      </div>
    </div>
  );
};

export default Temoinage;
