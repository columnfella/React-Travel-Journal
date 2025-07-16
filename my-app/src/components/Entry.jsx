export default function Entry(props) {
    return (
        <div className="entry">
            <div className="entry-img-container">
                <img src={props.img.src} alt={props.img.alt}/>
            </div>
            <div className="entry-info-container">
                <div className="entry-location-info">
                    <div className="entry-country-name-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F55A5A" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        <span className="entry-country-name">{props.country.toUpperCase()}</span>
                    </div>
                    <a href={props.googleMapsLink} target="_blank">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="entry-location-name">{props.title}</h1>
                <h1 className="entry-date">{props.dates}</h1>
                <p className="entry-description">
                    {props.text}
                </p>
            </div>
        </div>
    )
}