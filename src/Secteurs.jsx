function Secteurs(){
    const secteursAppelsOffres = [
    {
      "id": 1,
      "nom": "Bâtiment et Travaux Publics",
      "code": "BTP",
      "image": "/BTP.png",
      "description": "Secteur comprenant la construction, la rénovation et l'entretien des bâtiments, infrastructures routières, ponts, tunnels et ouvrages d'art. Inclut aussi l'aménagement urbain et les travaux de terrassement.",
      "sous_secteurs": [
        "Construction neuve",
        "Rénovation",
        "Voirie",
        "Génie civil",
        "Aménagement paysager"
      ]
    },
    {
      "id": 2,
      "nom": "Informatique et Télécommunications",
      "code": "IT",
      "image": "/IT.png",
      "description": "Développement de logiciels, maintenance informatique, infrastructure réseau, cybersécurité, télécommunications et transformation digitale des administrations publiques.",
      "sous_secteurs": [
        "Développement logiciel",
        "Infrastructure réseau",
        "Cybersécurité",
        "Maintenance informatique",
        "Télécommunications"
      ]
    },
    {
      "id": 3,
      "nom": "Santé et Services Médicaux",
      "code": "SANTE",
      "image": "/sante.png",
      "description": "Fourniture d'équipements médicaux, services de santé, maintenance hospitalière, produits pharmaceutiques et prestations de soins pour les établissements publics de santé.",
      "sous_secteurs": [
        "Équipements médicaux",
        "Produits pharmaceutiques",
        "Services de soins",
        "Maintenance hospitalière",
        "Imagerie médicale"
      ]
    },
    {
      "id": 4,
      "nom": "Transport et Logistique",
      "code": "TRANSPORT",
      "image": "/Transport.png",
      "description": "Services de transport public, logistique, maintenance de véhicules, transport scolaire, transport sanitaire et gestion des flottes pour les collectivités.",
      "sous_secteurs": [
        "Transport public",
        "Transport scolaire",
        "Logistique",
        "Maintenance véhicules",
        "Transport sanitaire"
      ]
    },
    {
      "id": 5,
      "nom": "Énergie et Environnement",
      "code": "ENERGIE",
      "image": "/energie.png",
      "description": "Énergies renouvelables, efficacité énergétique, gestion des déchets, traitement de l'eau, études environnementales et développement durable.",
      "sous_secteurs": [
        "Énergies renouvelables",
        "Efficacité énergétique",
        "Gestion des déchets",
        "Traitement de l'eau",
        "Études environnementales"
      ]
    },
    {
      "id": 6,
      "nom": "Équipements et Mobilier",
      "code": "EQUIPEMENT",
      "image": "/equipement.png",
      "description": "Fourniture de mobilier de bureau, équipements scolaires, mobilier urbain, équipements sportifs et matériel technique pour les administrations.",
      "sous_secteurs": [
        "Mobilier de bureau",
        "Équipements scolaires",
        "Mobilier urbain",
        "Équipements sportifs",
        "Matériel technique"
      ]
    },
    {
      "id": 7,
      "nom": "Conseil et Études",
      "code": "CONSEIL",
      "image": "/conseil_etude.png",
      "description": "Prestations intellectuelles, études techniques, conseil en organisation, audit, assistance à maîtrise d'ouvrage et expertises spécialisées.",
      "sous_secteurs": [
        "Études techniques",
        "Conseil en organisation",
        "Audit",
        "Assistance maîtrise d'ouvrage",
        "Expertises juridiques"
      ]
    },
    {
      "id": 9,
      "nom": "Agriculture et Alimentation",
      "code": "AGRICULTURE",
      "image": "/agriculture.png",
      "description": "Fourniture de produits alimentaires, prestations agricoles, entretien d'espaces verts, fournitures pour cantines et services vétérinaires.",
      "sous_secteurs": [
        "Produits alimentaires",
        "Entretien espaces verts",
        "Services vétérinaires",
        "Fournitures cantines",
        "Prestations agricoles"
      ]
    }
  ];
  
    return (
    <div className="secteurs-container">
      <h1 className="section-title">Secteurs</h1>
      <p className="section-description">
        Découvrez les principaux secteurs couverts par notre plateforme. Chaque secteur regroupe des sous-secteurs spécifiques pour mieux cibler les opportunités d'appels d'offres.
      </p>
      <div className="cards-grid">
        {secteursAppelsOffres.map((secteur, index) => (
          <div key={index} className="secteur-card">
            <img src={secteur.image} alt={`image secteur ${secteur.nom}`} />
            <h3>{secteur.nom}</h3>
            <p className="secteur-description">{secteur.description}</p>
            <h4>Sous-secteurs</h4>
            <ul>
              {secteur.sous_secteurs.map((sous_secteur, idx) => (
                <li key={idx}>{sous_secteur}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Secteurs