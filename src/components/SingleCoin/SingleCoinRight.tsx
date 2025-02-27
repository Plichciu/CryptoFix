import { useContext } from 'react'
import { CryptoContext } from '../../App'
import LineChart from './LineChart'
import { SingleRightInterfaceProps } from '../../types/types'

const SingleCoinRight = ({
	period,
	setPeriod,
	singleCoinData,
	historyPrice,
}: SingleRightInterfaceProps) => {
	const { fiatCurrency } = useContext(CryptoContext)
	return (
		<div className="basis-[60%]">
			<div className="px-5 lg:px-0">
				<div className="grid">
					<LineChart
						period={period}
						historyPrice={historyPrice}
						singleCoinData={singleCoinData}
					/>
				</div>
				<div className="bg-colorBgc mb-10 mt-2 p-3 rounded-md">
					<ul className="w-full flex justify-between menu menu-horizontal">
						<li className="w-[30%] max-w-24 md:max-w-36">
							<a
								onClick={() => setPeriod('24h')}
								className={`hover:bg-mainColor flex justify-center items-center py-2 border-2 border-solid border-mainColor hover:text-white text-sm lg:text-lg ${
									period === '24h' && 'bg-mainColor text-white'
								}`}>
								24h
							</a>
						</li>
						<li className="w-[30%] max-w-24 md:max-w-36">
							<a
								onClick={() => setPeriod('7d')}
								className={`hover:bg-mainColor flex justify-center items-center py-2 border-2 border-solid border-mainColor hover:text-white text-sm lg:text-lg ${
									period === '7d' && 'bg-mainColor text-white'
								}`}>
								7d
							</a>
						</li>
						<li className="w-[30%] max-w-24 md:max-w-36">
							<a
								onClick={() => setPeriod('30d')}
								className={`hover:bg-mainColor flex justify-center items-center py-2 border-2 border-solid border-mainColor hover:text-white text-sm lg:text-lg ${
									period === '30d' && 'bg-mainColor text-white'
								}`}>
								30d
							</a>
						</li>
					</ul>
				</div>
				<div className="overflow-x-auto w-full mb-12 lg:mb-4 rounded-md bg-colorBgc shadow-sm shadow-neutral-300 ">
					<table className="table table-zebra text-xl ">
						<thead>
							<tr>
								<th className="text-center">Date</th>
								<th className="text-center">Highest Price</th>
							</tr>
						</thead>
						<tbody>
							{singleCoinData.allTimeHigh && (
								<tr className="text-sm sm:text-lg">
									<td className="text-center">
										<p>
											{new Date(
												singleCoinData.allTimeHigh.timestamp * 1000
											).toLocaleDateString()}
										</p>
									</td>
									<td className="text-center">
										<p>
											{Number(singleCoinData.allTimeHigh.price) < 0.01 ? (
												<span>
													{Number(singleCoinData.allTimeHigh.price).toFixed(6)}{' '}
												</span>
											) : Number(singleCoinData.allTimeHigh.price) < 0.99 ? (
												<span>
													{Number(singleCoinData.allTimeHigh.price).toFixed(4)}{' '}
												</span>
											) : (
												<span>
													{Number(singleCoinData.allTimeHigh.price).toFixed(2)}{' '}
												</span>
											)}
											{' ' + fiatCurrency.symbol}
										</p>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default SingleCoinRight
