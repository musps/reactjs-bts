import React, { Component, Fragment  } from 'react';
import HistoryAgentComponent, {
  HistoryItem,
  SearchBar,
  NoResultItem
} from './Components'


const FakeItems = [
  {
    'id': 0,
    'title': 'Banane violette avec tâche',
    'shop': 'Auchan',
    'date': '05/04/2018 10:30',
    'price': '18,04'
  },
  {
    'id': 1,
    'title': 'Banane violette avec tâche',
    'shop': 'Auchan',
    'date': '05/04/2018 10:30',
    'price': '18,04'
  },
  {
    'id': 2,
    'title': 'Banane violette avec tâche',
    'shop': 'Auchan',
    'date': '05/04/2018 10:30',
    'price': '18,04'
  }
]

const isItemSelected = (selectedItemId, currentItemId) => {
  return parseInt(selectedItemId) === parseInt(currentItemId)
}

const stringToContains = (str, criteria) => {
  const _str = str.toLowerCase()
  const _criteria = criteria.toLowerCase()

  return _str.includes(_criteria)
}

class HistoryCustomerPage extends Component {
  state = {
    criteria: '',
    fakeItems: FakeItems,
    selectedItem: 0
  }

  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this)
    this.onCriteriaChange = this.onCriteriaChange.bind(this)
    this.filterItems = this.filterItems.bind(this)
  }

  onClickSelected (id) {
    this.setState(prevState => ({
      ...prevState,
      selectedItem: id
    }))
  }

  onCriteriaChange (e) {
    const criteria = e.target.value

    this.setState(prevState => ({
      ...prevState,
      criteria: criteria
    }))
  }

  filterItems (item) {
    return stringToContains(item.title, this.state.criteria)
      || stringToContains(item.shop, this.state.criteria)
      || stringToContains(item.date, this.state.criteria)
      || stringToContains(item.price, this.state.criteria)
  }

  renderItems () {
    const _items = this.state.fakeItems.filter(this.filterItems)

    return (
      <Fragment>
        <SearchBar
          criteria={this.state.criteria}
          onChange={this.onCriteriaChange}
        />
        {_items.length === 0 &&
          <NoResultItem criteria={this.state.criteria} />
        }
        {_items.map((item) =>
          <HistoryItem key={item.id}
            title={item.title}
            shop={item.shop}
            date={item.date}
            price={item.price}
            isSelected={isItemSelected(this.state.selectedItem, item.id)}
            onClickSelected={() => this.onClickSelected(item.id) }
          />
        )}
      </Fragment>
    )
  }

  render () {
    return (
        <HistoryAgentComponent items={this.renderItems()} />
    )
  }
}

export default HistoryCustomerPage
