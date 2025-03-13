import { Header } from './components/header/header'
import { News } from './components/news/news'
import { Footer } from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <News />
      <Footer /> 
    </ErrorBoundary> 
  )
}

export default App
