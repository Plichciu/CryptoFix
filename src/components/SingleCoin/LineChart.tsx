import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { CryptoContext } from '../../App'
import { useContext } from 'react'
import { LineChartInterfaceProps } from '../../types/types'
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const LineChart = ({ period, historyPrice, singleCoinData }: LineChartInterfaceProps) => {
	const { fiatCurrency } = useContext(CryptoContext)

	const labelsFirst = historyPrice.map(item => {
		if (period === '24h') {
			return new Date(item.timestamp * 1000).toLocaleTimeString().slice(0, -3)
		}
		return new Date(item.timestamp * 1000).toLocaleDateString().slice(0, -5)
	})

	const labelsSecond = labelsFirst.filter(function (_, i) {
		return i % 25 === 0
	})

	const labels = labelsSecond.reverse()

	const data = {
		labels,
		datasets: [
			{
				label: singleCoinData.name + ' in ' + fiatCurrency.symbol,
				data: historyPrice.map(item => item.price),
				borderColor: '#43B803',
				backgroundColor: '#43B803',
			},
		],
	}

	const options = {
		responsive: true,
		scales: {
			y: {
				// grid: {
				// 	display: false,
				// },
				ticks: {
					min: 0,
					max: 4,
					stepSize: 0,
					font: {
						family: 'Poppins',
					},
				},
			},

			x: {
				grid: {
					display: false,
				
				},
				title: {
					font: {
						size: 18,
					},
					color: 'black',
				},
				ticks: {
					font: {
						family: 'Poppins',
					},
				},
			},
		},
	}

	return <Line data={data} options={options} />
}

export default LineChart
