const SocialMedia = ({ className }) => {
    const redes =[
        {
            nombre:'Instagram',
            icon:'fa-brands fa-instagram',
            url:'https://www.instagram.com/masterplan.proyectos/',
            color:'#E4405F'
        },
        {
            nombre:'Whatsapp',
            icon:'fa-brands fa-whatsapp',
            url:'https://wa.me/573208233592?text=Hola%20M_P%20estoy%20interesado%20en%20su%20interventoría',
            color:'#25D366'
        },
    ];
    return (
        <div className={`social-container${className}`}>
            {redes.map((red)=>(
                <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                style={{'--hover-color': red.color}}
                >
                    <i className={red.icon}></i>
                </a>
            ))}
        </div>
    );
};
export default SocialMedia;