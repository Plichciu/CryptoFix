export interface CryptoContextType {
	fiatCurrency: { uuid: string; symbol: string }
	setFiatCurrency: React.Dispatch<React.SetStateAction<{ uuid: string; symbol: string }>>
	coinList: never[]
	inputValue: string
	setInputValue: React.Dispatch<React.SetStateAction<string>>
	searchCoinList: never[]
	setSearchCoinList: React.Dispatch<React.SetStateAction<never[]>>
	loading: boolean
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
	watchList: WatchListInterface[]
	setWatchList: React.Dispatch<React.SetStateAction<WatchListInterface[]>>
	emptySearchList: boolean
}

export interface CoinInterface {
	name: string
	iconUrl: string
	change: string
	uuid: string
	rank: number
	symbol: string
	price: string
	marketCap: string
	supply: { circulating: string; total: string }
	'24hVolume': string
	description: string
    allTimeHigh: { price: string; timestamp: number }

}

export interface WatchListInterface {
	name: string
	iconUrl: string
	change: string
	uuid: string
}

export interface SingleLeftInterface {
	singleCoinData: CoinInterface
	fiatCurrency: { uuid: string; symbol: string }
	addToWatchList: (name: string, iconUrl: string, change: string, uuid: string) => void
	numberWithCommas: (x: number) => string
}

export interface SingleCoinDataInterface {
	singleCoinData: CoinInterface
	historyPrice: { timestamp: number; price: number }[]
	fiatCurrency: { uuid: string; symbol: string }
	period: string
	loading: boolean
	showAlert: { isShow: boolean; content: string }
	setPeriod: React.Dispatch<React.SetStateAction<string>>
	setShowAlert: React.Dispatch<React.SetStateAction<{ isShow: boolean; content: string }>>
	setHistoryPrice: React.Dispatch<
		React.SetStateAction<{ timestamp: number; price: number }[]>
	>
	setSingleCoinData: React.Dispatch<React.SetStateAction<CoinInterface>>
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface HistoryPriceInterface {
    timestamp: number;
    price: number;   
}

export interface LineChartInterfaceProps {
    period: string;
    historyPrice: HistoryPriceInterface[];
    singleCoinData: CoinInterface;
}

export interface SingleRightInterfaceProps {
    period: string;
    setPeriod: React.Dispatch<React.SetStateAction<string>>;
    singleCoinData: CoinInterface;
    historyPrice: HistoryPriceInterface[];
}