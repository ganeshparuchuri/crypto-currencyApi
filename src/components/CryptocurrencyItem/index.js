// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoItem
  return (
    <li className="list-items">
      <div className="div1 div5">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <h1 className="currency-heading">{currencyName}</h1>
      </div>
      <div className="div1">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
