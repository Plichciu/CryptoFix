import { useContext } from 'react'
import mainlogo from '../images/mainlogo.png'
import { CryptoContext } from '../App'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'

const NavBar = () => {
	const { fiatCurrency, setFiatCurrency, inputValue, setInputValue } =
		useContext(CryptoContext)

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
		<div className="flex flex-col justify-center bg-black h-20 ">
			<div className="navbar max-w-[1440px] mx-auto">
				<div className="flex-1 gap-2">
					<div>
						<Drawer />
					</div>
					<div className="form-control">
						<input
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							type="text"
							placeholder="Search"
							className="input input-bordered w-24 md:w-auto"
						/>
					</div>
					<div className="dropdown hidden sm:block">
						<label tabIndex={0} className="btn m-1 ">
							{fiatCurrency.symbol}
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-fit z-10">
							<li onClick={handleClickUSD}>
								<a>USD</a>
							</li>
							<li onClick={handleClickPLN}>
								<a>PLN</a>
							</li>
						</ul>
					</div>
				</div>
				<Link to="/" className="" onClick={() => setInputValue('')}>
					<img className="h-8" src={mainlogo} alt="logo cryptofix" />
				</Link>
			</div>
		</div>
	)
}

export default NavBar
