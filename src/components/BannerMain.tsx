import coinsImg from '../images/coinsImg.png'

const BannerMain = () => {
	return (
		<div className="bg-base-200 w-screen mb-20 shadow shadow-neutral-300 ">
			<div className="overflow-x-hidden w-full max-w-[1400px] mx-auto px-3">
				<div className="flex flex-wrap justify-center h-fit lg:flex-nowrap lg:justify-between lg:mt-10">
					<div className="mt-10 space-y-5 mb-5 ">
						<h1 className="text-black text-4xl text-center font-bold lg:text-left">
							<span className="text-mainColor">Leader</span> in Cryptocurrency Tracking
						</h1>
						<h2 className="text-sm text-black text-center font-sembibold lg:text-lg lg:text-left">
							Empowering Your Decisions: Track, Analyze,{' '}
							<span className="text-mainColor">Succeed!</span>
						</h2>
					</div>

					<img
						src={coinsImg}
						alt="Coins with bitcoin logo"
						className="h-48 block mb-10 max-[450px]:h-28 lg:h-44 "
					/>
				</div>
			</div>
		</div>
	)
}

export default BannerMain