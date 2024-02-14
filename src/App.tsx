import { createContext, useEffect, useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleCoinPage from './pages/SingleCoinPage'
import { CryptoContextType } from './types/types'

export const CryptoContext = createContext<CryptoContextType>({
	fiatCurrency: { uuid: '', symbol: '' },
	setFiatCurrency: () => {},
	coinList: [],
	inputValue: '',
	setInputValue: () => {},
	searchCoinList: [],
	setSearchCoinList: () => {},
	loading: false,
	setLoading: () => {},
	watchList: [],
	setWatchList: () => {},
	emptySearchList: false,
})

const watchListFromStorage = JSON.parse(localStorage.getItem('watchList') || '[]')

if (watchListFromStorage === null) {
	localStorage.setItem('watchList', JSON.stringify([]))
}

const App = () => {
	const [fiatCurrency, setFiatCurrency] = useState({
		uuid: 'yhjMzLPhuIDl',
		symbol: 'USD',
	})
	const [coinList, setCoinList] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [searchCoinList, setSearchCoinList] = useState([])
	const [loading, setLoading] = useState(false)
	const [watchList, setWatchList] = useState(watchListFromStorage)
	const [emptySearchList, setEmptySearchList] = useState(false)

	const searchCoinApi = async () => {
		const url = `https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=${fiatCurrency.uuid}&query=${inputValue}`
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '5dd69db50bmsh8d55dc0326254e0p12a5fdjsn7422f5022eff',
				'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
			},
		}
		try {
			setLoading(true)
			const response = await fetch(url, options)
			const result = await response.json()
			setSearchCoinList(result.data.coins)
			if (result.data.coins.length === 0) {
				setEmptySearchList(true)
			} else {
				setEmptySearchList(false)
			}
			setLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	const getCoinListApi = async () => {
		const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=${fiatCurrency.uuid}&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '5dd69db50bmsh8d55dc0326254e0p12a5fdjsn7422f5022eff',
				'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
			},
		}

		try {
			setLoading(true)
			const response = await fetch(url, options)
			const result = await response.json()

			setCoinList(result.data.coins)
			setLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getCoinListApi()
	}, [fiatCurrency])

	useEffect(() => {
		localStorage.setItem('watchList', JSON.stringify(watchList))
	}, [watchList])

	useEffect(() => {
		if (inputValue === '') {
			return
		}

		searchCoinApi()
	}, [inputValue, fiatCurrency.uuid])

	return (
		<BrowserRouter>
			<div className="">
				<CryptoContext.Provider
					value={{
						fiatCurrency,
						setFiatCurrency,
						coinList,
						inputValue,
						setInputValue,
						searchCoinList,
						setSearchCoinList,
						loading,
						setLoading,
						watchList,
						setWatchList,
						emptySearchList,
					}}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/coin/:id" element={<SingleCoinPage />} />
					</Routes>
				</CryptoContext.Provider>
			</div>
		</BrowserRouter>
	)
}

export default App
