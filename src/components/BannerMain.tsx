const BannerMain = () => {
	return (
		<div className="bg-base-200 w-screen mb-10 py-10 shadow shadow-neutral-300 ">
			<div className="overflow-x-hidden w-full max-w-[1400px] mx-auto px-3">
				<div className="flex flex-wrap justify-center h-fit lg:flex-nowrap ">
					<div className="mt-10 space-y-5 mb-5 ">
						<h1 className="text-black text-4xl text-center font-bold">
							<span className="text-mainColor">Leader</span> in Cryptocurrency Tracking
						</h1>
						<h2 className="text-sm text-black text-center font-sembibold ">
							Empowering Your Decisions: Track, Analyze,{' '}
							<span className="text-mainColor">Succeed!</span>
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerMain
