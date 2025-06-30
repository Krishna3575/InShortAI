import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-red-300 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-black-700"><Link to="/">InShortAI</Link></h1>
        <div className="space-x-8">
          <Link to="/" className="text-white-700 hover:text-white">Home</Link>
          <Link to="/summaries" className="text-white-700 hover:text-white">My Summaries</Link>
        </div>
      </div>
    </nav>
  )
}
