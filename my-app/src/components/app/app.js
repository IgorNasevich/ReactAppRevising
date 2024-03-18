import {Component} from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			data : [
				{name: 'Igor', salary: 800, increase: true, rise: true, id: 1},
				{name: 'Vitalik', salary: 3000, increase: false, rise: false, id: 2},
				{name: 'Pasha', salary: 15000, increase: true, rise: true, id: 3}
			],
			maxId: 4,
			term: '',
			filterType: 'all'
		}
		
	}

	deleteItem = (id)=>{
		this.setState(({data}) =>{
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name,salary) => {
		this.setState(({data,maxId})=>{
			return{
				data: [...data, {name: name, salary: salary, increase: true, rise: false, id: maxId}],
				maxId: maxId + 1
			}
		})
	}

	onToggleProp = (id, prop) =>{
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id){
					return{...item, [prop]: !item[prop]}
				}
				return item; 
			})
		}))
	}
	
	searchEmp = (items,term) =>{
		if (term.length === 0){
			return items
		}
		
		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term)=>{
		this.setState({term})
	}

	onChooseFilter = (filterType) =>{
		this.setState({filterType})
	}

	applyFilter = (data, filterType) =>{
		switch (filterType){		
			case 'rise':
				return data.filter(item => item.rise)
			case 'moreThanThousand':
				return data.filter(item => item.salary > 1000)
			default:
				return data 
		}
	}

	render(){
		let {data, term, filterType} = this.state
		let generalAmount = data.length
		let increasedAmount = data.filter(item => item.increase).length
		let visibleData = this.applyFilter(this.searchEmp(data, term),filterType)
		return(
			<div className="app">
				<AppInfo
					numbers = {{generalAmount,increasedAmount}}
				/>
				<div className="search-panel">
					<SearchPanel
						onUpdateSearch = {this.onUpdateSearch}/>
					<AppFilter
					filterType = {filterType}
					onChooseFilter = {this.onChooseFilter}/>
				</div>
				<EmployeesList 
					data = {visibleData}
					onDelete = {this.deleteItem}
					onToggleProp = {this.onToggleProp}/>
				<EmployeesAddForm 
					onAddItem = {this.addItem}/>
			</div>
		)
	}
	
}

export default App
