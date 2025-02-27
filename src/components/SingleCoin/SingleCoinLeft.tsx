import { useContext } from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { FaArrowTrendDown } from 'react-icons/fa6'
import { TiArrowSortedDown } from 'react-icons/ti'
import { TiArrowSortedUp } from 'react-icons/ti'
import { CryptoContext } from '../../App'
import { SingleLeftInterface } from '../../types/types'

const SingleCoinLeft = ({
	addToWatchList,
	singleCoinData,
	numberWithCommas,
}: SingleLeftInterface) => {
	const { fiatCurrency } = useContext(CryptoContext)

	const marketCap = singleCoinData.marketCap
	const marketCapNumber: number = Number(marketCap)

	const supplyCirculating = singleCoinData.supply.circulating
	const supplyCirculatingNumber: number = Number(supplyCirculating)

	const volume24h = singleCoinData['24hVolume']
	const volume24hNumber: number = Number(volume24h)

	return (
		<div className="bg-base-200 basis-[40%] px-5 py-5 mb-5 lg:px-0 lg:py-0 lg:bg-transparent">
			<div className="flex justify-between py-3">
				<div className="flex items-center justify-start">
					<img
						className="h-8 mr-1"
						src={singleCoinData.iconUrl}
						alt={`icon of ${singleCoinData.name}`}
					/>
					<h1 className="text-md font-semibold lg:text-lg">{singleCoinData.name}</h1>
					<span className="self-start ml-1 bg-mainColor px-2 rounded-sm text-white text-sm">
						{singleCoinData.symbol}
					</span>
				</div>
				<div
					className={`flex justify-center items-center mr-2 px-1 rounded-sm text-xs lg:text-sm lg:px-2 ${
						Number(singleCoinData.change) > 0 ? 'bg-green-500' : 'bg-red-500'
					}`}>
					<p className="text-white">
						{singleCoinData.change} %
						{Number(singleCoinData.change) > 0 ? (
							<span className="inline-block">
								<TiArrowSortedUp className="text-white" />
							</span>
						) : (
							<span className="inline-block">
								<TiArrowSortedDown className="text-white" />
							</span>
						)}
					</p>
				</div>
			</div>
			<div className="info">
				<div className="font-light">
					<div className="bg-[#F2F2F7] px-4 py-2 mt-1 mb-5 rounded-sm shadow-neutral-300 shadow-sm ">
						<p>
							Rank: <span className="font-semibold">#{singleCoinData.rank}</span>
						</p>
					</div>

					<div>
						<p className="text-sm text-neutral-900 tracking-wider font-light">
							{singleCoinData.description}
						</p>
					</div>
					<div className="flex flex-col gap-6 my-3">
						<div className="bg-[#F2F2F7] px-4 py-2 rounded-sm shadow-neutral-300 shadow-sm">
							<p>
								Price:{' '}
								<span className="font-normal">
								{Number(singleCoinData.price) < 0.01 ? (
										<span>{Number(singleCoinData.price).toFixed(6)}</span>
									) : Number(singleCoinData.price) < 0.99 ? (
										<span>{Number(singleCoinData.price).toFixed(4)}</span>
									) : (
										<span>{Number(singleCoinData.price).toFixed(2)}</span>
									)}{' '}
									{fiatCurrency.symbol}
								</span>
							</p>
						</div>
						<div className="bg-[#F2F2F7] px-4 py-2 rounded-sm shadow-sm shadow-neutral-300">
							<p>
								Market Cap:{' '}
								<span className="font-normal">
									{numberWithCommas(marketCapNumber)} {fiatCurrency.symbol}
								</span>
							</p>
						</div>
						<div className="bg-[#F2F2F7] px-4 py-2 rounded-sm shadow-sm shadow-neutral-300">
							<p>
								Circulating supply:{' '}
								<span className="font-normal">
									{numberWithCommas(supplyCirculatingNumber)} {fiatCurrency.symbol}
								</span>
							</p>
						</div>
						<div className="bg-[#F2F2F7] px-4 py-2 rounded-sm shadow-sm shadow-neutral-300">
							<p>
								Volume 24h:{' '}
								<span className="font-normal">
									{numberWithCommas(volume24hNumber)} {fiatCurrency.symbol}
								</span>
							</p>
						</div>
						<div>
							<button
								onClick={() =>
									addToWatchList(
										singleCoinData.name,
										singleCoinData.iconUrl,
										singleCoinData.change,
										singleCoinData.uuid
									)
								}
								className="bg-mainColor btn hover:bg-neutral-700 uppercase  text-white w-full">
								Add to watch list
							</button>
						</div>
					</div>
				</div>
				<div className="bg-colorBgc flex items-center justify-center my-8   rounded-md shadow-sm shadow-neutral-300">
					<div className="overflow-x-auto w-full">
						<table className="table table-zebra text-xl bg-colorBgc">
							<thead>
								<tr>
									<th className="text-center">Icon</th>
									<th className="text-center">Change 24h</th>
									<th className="text-center">Current Price</th>
								</tr>
							</thead>
							<tbody>
								<tr className="text-sm sm:text-lg">
									<td className="relative flex justify-center">
										<img
											src={singleCoinData.iconUrl}
											alt={`${singleCoinData.name} icon`}
											className="w-12"
										/>
									</td>
									<td className="text-center">
										<p className=" flex justify-center items-center gap-2">
											{singleCoinData.change} %
											{Number(singleCoinData.change) > 0 ? (
												<span className="inline-block">
													<FaArrowTrendUp className="text-green-500" />
												</span>
											) : (
												<span className="inline-block">
													<FaArrowTrendDown className="text-red-500" />
												</span>
											)}
										</p>
									</td>
									<td className="text-center">
										<p>
										{Number(singleCoinData.price) < 0.01 ? (
												<span>{Number(singleCoinData.price).toFixed(6)}</span>
											) : Number(singleCoinData.price) < 0.99 ? (
												<span>{Number(singleCoinData.price).toFixed(4)}</span>
											) : (
												<span>{Number(singleCoinData.price).toFixed(2)}</span>
											)}{' '}
											{fiatCurrency.symbol}
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleCoinLeft
