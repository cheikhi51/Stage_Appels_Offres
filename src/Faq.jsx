import React, { useState } from 'react';

const faqData = [
  {
    question: "Qu'est-ce qu'OfferTrack ?",
    answer: "OfferTrack est une plateforme qui vous permet d'analyser, visualiser et améliorer vos performances sur les appels d'offres grâce à des indicateurs clés (KPIs)."
  },
  {
    question: "Qui peut utiliser cette plateforme ?",
    answer: "Tout professionnel ou organisation impliqué dans des appels d'offres : responsables commerciaux, chargés de projets, directions générales, etc."
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer: "Oui, toutes les données sont stockées de manière sécurisée avec des protocoles de chiffrement avancés et un accès contrôlé par rôle."
  },
  {
    question: "Puis-je exporter les KPIs ?",
    answer: "Absolument. OfferTrack vous permet d’exporter vos indicateurs sous forme de rapports PDF ou fichiers Excel."
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <h2 className="section-title">Foire Aux Questions</h2>
      <p className="section-description">
        Retrouvez ici les réponses aux questions les plus fréquentes concernant OfferTrack. Que ce soit sur l'utilisation de la plateforme, les indicateurs suivis ou les rôles des utilisateurs, cette section est là pour vous éclairer rapidement.
      </p>

      <div className="faq-section">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
