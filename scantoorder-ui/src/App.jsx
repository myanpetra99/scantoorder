import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MenuSlideHorizontal from './components/Menu/MenuSlideHorizontal';
import MenuSlideVertical from './components/Menu/MenuSlideVertical'

function App() {
  return (
    <div className="App">
      <MenuSlideVertical />
      <MenuSlideHorizontal />
      <MenuSlideVertical />
      <MenuSlideHorizontal />
    </div>
  )
}

export default App
