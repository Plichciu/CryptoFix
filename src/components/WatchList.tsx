import  { useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import { CryptoContext } from '../App'
import { useNavigate } from 'react-router-dom'

const WatchList = () => {
	const {watchList, setWatchList } = useContext(CryptoContext)
	const navigate = useNavigate()

	const deleteCoin = (e: React.MouseEvent, id: string) => {
		e.stopPropagation()
		console.log(id)
		const newWatchList = watchList.filter(coin => coin.uuid !== id)
		setWatchList(newWatchList)
	}

	const redirect = (id: string) => {
		navigate(`/coin/${id}`)
	}

	console.log(watchList)
	//
	return (
		<div>
			<h3 className="text-center text-lg">Watchlist</h3>
			<div>
				{watchList.length === 0 ? (
					<p className="text-center mt-2 text-neutral-500">Watchlist is empty...</p>
				) : (
					<ul>
						{watchList.map((coin, index) => {
							return (
								<li
									onClick={() => redirect(coin.uuid)}
									key={index}
									id={coin.uuid}
									className="my-3 bg-colorBgc shadow-sm shadow-neutral-200 shadow-solid">
									<label htmlFor="my-drawer" aria-label="close sidebar">
										<img src={coin.iconUrl} alt={coin.name} className="h-5" />

										<p>{coin.name}</p>
										<p
											className={
												Number(coin.change) > 0 ? 'text-green-500' : 'text-red-500'
											}>
											{Number(coin.change).toFixed(2)} %
										</p>
										<IoClose
											onClick={e => deleteCoin(e, coin.uuid)}
											className="px-1 text-black h-8 w-8 hover:text-red-500"
										/>
									</label>
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</div>
	)
}

export default WatchList
