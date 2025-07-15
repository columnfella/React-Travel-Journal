import mountfujiimg from '../assets/mountfuji.avif'

export default function Entry() {
    return (
        <div className="entry">
            <div className="entry-img-container">
                <img src={mountfujiimg} alt="Travel Image"/>
            </div>
            <div className="entry-info-container">
                <div className="entry-location-info">
                    <div className="entry-country-name-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F55A5A" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        <span className="entry-country-name">JAPAN</span>
                    </div>
                    <a href="https://www.google.com/maps/place/Mont+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="entry-location-name">Mount Fuji</h1>
                <h1 className="entry-date">12 Jan, 2021 - 24 Jan, 2021</h1>
                <p className="entry-description">
                    Mount Fuji is the tallest mountain in Japan,
                    standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular
                    tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )
}