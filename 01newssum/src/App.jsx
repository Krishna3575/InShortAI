import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MySummaries from './pages/MySummaries'
import ArticleDetail from './components/ArticleDetail'

export default function App() {
  return (
    <div className="min-h-screen bg-amber-100 text-stone-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summaries" element={<MySummaries />} />
        <Route path="/article" element={<ArticleDetail />} />
      </Routes>
    </div>
  )
}
