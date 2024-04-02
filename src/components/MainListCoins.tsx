import { useContext } from 'react'
import { CryptoContext } from '../App'
import { Link } from 'react-router-dom'
import { CoinInterface } from '../types/types'
import BannerMain from './BannerMain'

const MainListCoins = () => {
	const { fiatCurrency, coinList, setInputValue } = useContext(CryptoContext)

	return (
		<>
			<BannerMain />
			<div className="overflow-x-auto w-full max-w-[1400px] mx-auto px-3">
				<h2 className="text-center font-bold text-2xl mb-10 bg-base-200 py-5">
					Top 50 <span className="text-mainColor">crypto</span>currencies
				</h2>
				<table className="table ">
					<thead>
						<tr>
							<th className="hidden sm:block text-center">Rank</th>
							<th>Name</th>
							<th>Change</th>
							<th>Price</th>
							<th className="hidden sm:block">More</th>
						</tr>
					</thead>
					<tbody>
						{coinList.map((coin: CoinInterface, index) => {
							return (
								<tr key={index} className="group hover:bg-base-200">
									<th className="text-center hidden sm:block">
										<p>{coin.rank}</p>
									</th>
									<td>
										<Link to={`/coin/${coin.uuid}`}>
											<div className="flex items-center gap-3 ">
												<div className="avatar">
													<div className="mask mask-squircle w-7 h-7 sm:w-10 sm:h-10">
														<img src={coin.iconUrl} alt={coin.name} />
													</div>
												</div>
												<div>
													<p className="text-xs sm:text-sm font-bold w-5 md:w-full group-hover:text-mainColor">
														{coin.name}
													</p>
													<span className="text-sm opacity-50">{coin.symbol}</span>
												</div>
											</div>
										</Link>
									</td>
									<td className="">
										<span
											className={`flex justify-center items-center w-20  bg-colorBgc py-1 rounded-md text-center 
											${Number(coin.change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
											{coin.change} %
										</span>
									</td>
									<td className="bg-base-200 w-18 lg:max-w-24">
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
									<td className="hidden sm:block">
										<Link onClick={() => setInputValue('')} to={`/coin/${coin.uuid}`}>
											<button className="btn border-0 btn-sm text-[12px] hover:bg-mainColor hover:text-gray-200">
												Details
											</button>
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default MainListCoins
