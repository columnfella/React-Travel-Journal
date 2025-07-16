import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  const entries = data.map(entry => (
    <Entry
      key={entry.id}
      {...entry}
    />
  ))

  return (
    <>
      <Header />
      {entries}
    </>
  )
}

export default App
