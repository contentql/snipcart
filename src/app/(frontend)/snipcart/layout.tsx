import Navbar from './components/Navbar'

const SnipcartLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default SnipcartLayout
