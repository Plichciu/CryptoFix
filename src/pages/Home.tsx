import { useContext } from 'react'
import MainListCoins from '../components/MainListCoins'
import NavBar from '../components/NavBar'
import { CryptoContext } from '../App'
import SearchCoinList from '../components/SearchCoinList'
import LoaderProgress from '../components/LoaderProgress'

const Home = () => {
	const { inputValue, loading } = useContext(CryptoContext)

	return (
		<div className="overflow-x-hidden">
			<NavBar />
			{loading ? (
				<LoaderProgress />
			) : (
				<>{inputValue === '' ? <MainListCoins /> : <SearchCoinList />}</>
			)}
		</div>
	)
}

export default Home
