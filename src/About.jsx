import aboutSideImage from "/about_side_image.png";
function About(){
    return(
        <div className="about-container" id="about">
            <h1 className="section-title">À propos de nous</h1>
            <div className="about-content">
            <img className="side-image" src={aboutSideImage} alt="About Side Image" />
            <p className="about-text">
                OfferTrack est une plateforme web innovante conçue pour aider les entreprises à <span>analyser</span> et <span>visualiser</span> leurs performances dans le domaine des appels d'offres. Grâce à un système d'indicateurs clés (KPIs), OfferTrack permet aux utilisateurs de <span>suivre</span> leur taux de réussite, <span>d'identifier</span> les causes de rejet (techniques, administratives ou financières), et de <span>comparer</span> leur position face à la concurrence. L'application offre également une vision détaillée de l'activité des maîtres d'ouvrage, permettant de <span>cibler</span> les donneurs d'ordre les plus pertinents. Grâce à des tableaux de bord clairs et des rapports automatisés, OfferTrack <span>optimise</span> la stratégie commerciale des entreprises sur les marchés publics et privés.
            </p>
            </div>
        </div>
    )
}
export default About