import { useContext } from 'react'
import { CryptoContext } from '../App'
import { Link } from 'react-router-dom'
import { CoinInterface } from '../types/types'

const SingleSearchCoin = () => {
	const { searchCoinList, fiatCurrency, setInputValue } = useContext(CryptoContext)

	return (
		<>
			{searchCoinList.map((coin: CoinInterface, index) => {
				return (
					<tr key={index} className="group hover:bg-base-200">
						<td>
							<Link to={`/coin/${coin.uuid}`} onClick={() => setInputValue('')}>
								<div className="flex items-center gap-3">
									<div className="avatar">
										<div className="mask mask-squircle w-7 h-7 sm:w-10 sm:h-10">
											<img src={coin.iconUrl} alt={`icon ${coin.name}`} />
										</div>
									</div>
									<div>
										<div className="text-xs sm:text-sm font-bold group-hover:text-mainColor">
											{coin.name}
										</div>
										<div className="text-sm opacity-50">{coin.symbol}</div>
									</div>
								</div>
							</Link>
						</td>
						<td className=" md:max-w-7">
							<div className="md:flex justify-between">
								<p className="mb-1">
									{Number(coin.price) < 0.99 ? (
										<span>{Number(coin.price).toFixed(4)}</span>
									) : (
										<span>{Number(coin.price).toFixed(2)}</span>
									)}
								</p>
								<span className=" badge badge-primary text-white badge-sm md:ml-2">
									{fiatCurrency.symbol}
								</span>
							</div>
						</td>
						<td className="hidden sm:block bg-colorBgc">
							<Link onClick={() => setInputValue('')} to={`/coin/${coin.uuid}`}>
								<button className="btn border-0 btn-sm text-[12px] hover:bg-mainColor hover:text-gray-200 ">
									Details
								</button>
							</Link>
						</td>
					</tr>
				)
			})}
		</>
	)
}

export default SingleSearchCoin
