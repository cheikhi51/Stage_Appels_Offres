import { FaChartLine, FaCogs, FaSearchDollar,FaRobot } from 'react-icons/fa';
function Services(){
    return(
        <div className="services-container" id="services">
      <h1 className="section-title">Nos Services</h1>
      <div className="services-section">
        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h3>Analyse de Performance</h3>
          <p>Visualisez les indicateurs clés (KPIs) de vos appels d'offres pour une meilleure prise de décision.</p>
        </div>
        <div className="service-card">
          <FaCogs className="service-icon" />
          <h3>Optimisation des Processus</h3>
          <p>Optimisez les réponses aux appels d'offres grâce à des outils automatisés et intelligents.</p>
        </div>
        <div className="service-card">
          <FaSearchDollar className="service-icon" />
          <h3>Veille Concurrentielle</h3>
          <p>Suivez vos concurrents et les tendances du marché pour rester compétitif.</p>
        </div>
        <div className="service-card">
          <FaRobot className="service-icon" />
          <h3>Consultation IA</h3>
          <p>Interagissez avec notre assistant IA pour analyser vos appels d'offres, interpréter les KPIs,
             et recevoir des recommandations personnalisées en temps réel.</p>
        </div>
      </div>
    </div>
    )
}
export default Services