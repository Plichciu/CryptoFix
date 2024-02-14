import  { useContext } from 'react'
import WatchList from './WatchList'
import { IoIosArrowBack } from 'react-icons/io'
import MainLogo from '../images/mainlogoblack.png'
import { CryptoContext } from '../App'

const Drawer = () => {
	const { fiatCurrency, setFiatCurrency } = useContext(CryptoContext)

	const handleClickUSD = () => {
		const elem = document.activeElement as HTMLElement
		if (elem) {
			elem?.blur()
		}
		setFiatCurrency({ uuid: 'yhjMzLPhuIDl', symbol: 'USD' })
	}

	const handleClickPLN = () => {
		const elem = document.activeElement as HTMLElement
		if (elem) {
			elem?.blur()
		}
		setFiatCurrency({ uuid: 'QUs7TawY8pxS', symbol: 'PLN' })
	}

	return (
		<div className="drawer overflow-x-hidden">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<label
					htmlFor="my-drawer"
					aria-label="open sidebar"
					className="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current text-mainColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</label>
			</div>
			<div className="drawer-side z-10">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"></label>

				<ul className="menu p-4  w-[80%] sm:w-96 min-h-full bg-base-200 text-base-content ">
					<li className="">
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay hover:text-white cursor-pointer hover:bg-mainColor">
							<IoIosArrowBack className="text-2xl " />
							<p>Back</p>
						</label>
					</li>
					<li className="block sm:hidden">
						<div className="flex">
							<p>Currency: </p>
							<button
								onClick={handleClickUSD}
								className={`btn font-semibold hover:bg-mainColor hover:text-white ${
									fiatCurrency.symbol === 'USD' ? 'bg-mainColor text-white' : ''
								}`}>
								USD
							</button>
							<button
								onClick={handleClickPLN}
								className={`btn font-semibold hover:bg-mainColor hover:text-white ${
									fiatCurrency.symbol === 'PLN' ? 'bg-mainColor text-white' : ''
								}`}>
								PLN
							</button>
						</div>
					</li>
					<li>
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay block mx-auto my-2">
							<img src={MainLogo} alt="Main logo" className="block h-14" />
						</label>
					</li>

					<WatchList />
				</ul>
			</div>
		</div>
	)
}

export default Drawer
