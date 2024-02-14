import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar'
import { CryptoContext } from '../../App'
import SearchCoinList from '../SearchCoinList'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import LoaderProgress from '../LoaderProgress'

import WarningAlert from '../WarningAlert'
import SingleCoinLeft from './SingleCoinLeft'
import SingleCoinRight from './SingleCoinRight'
import {
	CoinInterface,
	HistoryPriceInterface,
	WatchListInterface,
} from '../../types/types'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const SingleCoin = () => {
	const { id } = useParams()
	const { inputValue, fiatCurrency, watchList, setWatchList } = useContext(CryptoContext)
	const [singleCoinData, setSingleCoinData] = useState({})
	const [historyPrice, setHistoryPrice] = useState([])
	const [period, setPeriod] = useState('24h')
	const [loading, setLoading] = useState(true)
	const [showAlert, setShowAlert] = useState({ isShow: false, content: '' })

	function numberWithCommas(x: number) {
		let parts = x.toString().split('.')
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
		return parts.join(',')
	}

	const showAlertFn = (message: string) => {
		setShowAlert({ isShow: true, content: message })
		let timer = setTimeout(() => setShowAlert({ isShow: false, content: message }), 3000)
		return () => {
			clearTimeout(timer)
		}
	}

	const addToWatchList = (
		name: string,
		iconUrl: string,
		change: string,
		uuid: string
	) => {
		if (watchList.some((coin: WatchListInterface) => coin.uuid === uuid)) {
			showAlertFn('Already exist in watch list!')
			return
		}
		setWatchList([...watchList, { name, iconUrl, change, uuid }])
		showAlertFn('Added to watch list!')
	}

	const getHistoryPriceApi = async () => {
		const url = `https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=${fiatCurrency.uuid}&timePeriod=${period}`
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '5dd69db50bmsh8d55dc0326254e0p12a5fdjsn7422f5022eff',
				'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
			},
		}

		try {
			const response = await fetch(url, options)
			const result = await response.json()
			setHistoryPrice(result.data.history)
		} catch (error) {
			console.error(error)
		}
	}

	const getCoinApi = async () => {
		const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=${fiatCurrency.uuid}&timePeriod=24h`
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
			setSingleCoinData(result.data.coin)
			setLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getCoinApi()
	}, [fiatCurrency, id])

	useEffect(() => {
		getHistoryPriceApi()
	}, [period, fiatCurrency])

	return (
		<div>
			<NavBar />
			{loading ? (
				<LoaderProgress />
			) : (
				<>
					{inputValue === '' ? (
						<div className="flex justify-center min-h-[calc(100vh-5rem)]">
							<div
								className={`flex flex-col max-w-[1440px] m-auto lg:gap-10 lg:flex-row lg:p-8`}>
								<SingleCoinLeft
									addToWatchList={addToWatchList}
									singleCoinData={singleCoinData as CoinInterface}
									numberWithCommas={numberWithCommas}
									fiatCurrency={{
										uuid: '',
										symbol: '',
									}}
								/>
								<SingleCoinRight
									period={period}
									setPeriod={setPeriod}
									singleCoinData={singleCoinData as CoinInterface}
									historyPrice={historyPrice as HistoryPriceInterface[]}
								/>
							</div>
						</div>
					) : (
						<SearchCoinList />
					)}
				</>
			)}
			{showAlert.isShow ? (
				<div className="fixed bottom-5 right-5 opacity-85 ">
					<WarningAlert message={showAlert.content} />
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default SingleCoin
