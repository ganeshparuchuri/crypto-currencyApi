// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.currencyApiCall()
  }

  currencyApiCall = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const UpdateResponse = await response.json()
    const dataConevert = UpdateResponse.map(eachValue => ({
      id: eachValue.id,
      currencyName: eachValue.currency_name,
      usdValue: eachValue.usd_value,
      euroValue: eachValue.euro_value,
      currencyLogo: eachValue.currency_logo,
    }))
    this.setState({cryptoList: dataConevert, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <ul className="ul-list">
        {cryptoList.map(eachCrypto => (
          <CryptocurrencyItem cryptoItem={eachCrypto} key={eachCrypto.id} />
        ))}
      </ul>
    )
  }
}

export default CryptocurrencyList
