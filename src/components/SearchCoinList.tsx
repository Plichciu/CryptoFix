import { useContext } from 'react'
import { CryptoContext } from '../App'
import SingleSearchCoin from './SingleSearchCoin'

const SearchCoinList = () => {
	const { emptySearchList } = useContext(CryptoContext)

	return (
		<div className="overflow-x-auto max-w-[1400px] mx-auto">
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th className="hidden sm:block">More</th>
					</tr>
				</thead>
				<tbody>
					{emptySearchList && (
						<p className="z-10 absolute top-6 left-[50%] translate-x-[-50%]">
							No results found
						</p>
					)}
					<SingleSearchCoin />
				</tbody>
			</table>
		</div>
	)
}

export default SearchCoinList
