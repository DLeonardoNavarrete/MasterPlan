import SocialMedia from './SocialMedia';
import '../App.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>MasterPlan</h3>
                    <p>Tu aliado estratégico en gestión de proyectos.</p>
                </div>
                <SocialMedia className="footer-social-media" />
                <div className="footer-bottom">
                    <p>&copy; 2026 MasterPlan. Todos los derechos resercados.</p>
                </div>

            </div>
        </footer>
    );
};
export default Footer;