import './app-filter.css'

const AppFilter = (props)=> {

	const buttonsData = [	
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'moreThanThousand', label: 'З/П больше 1000$'},
	]	

	const buttons = buttonsData.map(({name,label})=>{
		let clazz = props.filterType === name ? "btn-light" : "btn-outline-light"
		return (
			<button
				className={`btn ${clazz}`}
				type="button"
				key = {name}
				onClick = {()=>props.onChooseFilter(name)}>
					{label}
			</button>
		)
	})

	return(
		<div className="btn-group">
			{buttons}
		</div>
	)

}

export default AppFilter