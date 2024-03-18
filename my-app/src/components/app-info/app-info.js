import './app-info.css'

const AppInfo = ({numbers}) =>{
	return (
		<div className="app-info">
			<h1>Учёт сотрудников в компании</h1>
			<h2>Общее число сотрудников: {numbers.generalAmount}</h2>
			<h2>Премию получат: {numbers.increasedAmount}</h2>
		</div>

	)
}

export default AppInfo