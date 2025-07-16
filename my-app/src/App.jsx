import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import img from './assets/mountfuji.avif'

function App() {
  return (
    <>
      <Header />
      <Entry
        img={{ src: img, alt: "Mount Fuji" }}
        country="Japan"
        title="Mount Fuji"
        googleMapsLink="https://www.google.com/maps/place/Mont+Fuji/@35.3606233,138.767638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
        Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
    </>
  )
}

export default App
