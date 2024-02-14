import { IoWarningOutline } from 'react-icons/io5'
import { GrStatusGood } from 'react-icons/gr'

const WarningAlert = ({ message }: {message: string}) => {
	return (
		<div
			role="alert"
			className={`flex alert ${
				message === 'Added to watch list!' ? 'bg-mainColor' : 'bg-yellow-500'
			}`}>
			<span>
				{message === 'Added to watch list!' ? (
					<GrStatusGood className="text-white" />
				) : (
					<IoWarningOutline className="text-white" />
				)}
			</span>

			<span className="text-white">{message}</span>
		</div>
	)
}

export default WarningAlert
