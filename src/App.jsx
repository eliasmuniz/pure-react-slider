import Slider from './components/Slider'

function App() {

  const mockImagenes = [
    "https://picsum.photos/id/1/500/300",
    "https://picsum.photos/id/2/500/300",
    "https://picsum.photos/id/3/500/300",
  ]
  
  return (
    <Slider
      imagenes={mockImagenes}
    />
  )
}

export default App
