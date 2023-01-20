import './index.css'
import CryptocurrencyList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => (
  <div className="cryptop-currency-container">
    <div className="responsive-container">
      <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
      <img
        className="crypto-image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="cryptoItem-container">
        <div className="div2">
          <h1 className="d">Coin Type</h1>
          <div className="div3">
            <h1 className="d">USD</h1>
            <h1 className="d">EURO</h1>
          </div>
        </div>
        <CryptocurrencyList />
      </div>
    </div>
  </div>
)

export default CryptocurrencyTracker
