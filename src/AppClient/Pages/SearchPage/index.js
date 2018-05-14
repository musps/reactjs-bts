import React, { Component, Fragment } from 'react'
import './styles.css'

import SearchBar, {
  ItemList,
  ItemListTitle,
  ItemDivider,
  ItemBigTitle,
  Item
} from '@appCl/Components/SearchBar'

const SearchResult = ({criteria}) => {
  const showFullResult = `Voir tous les résultats pour << ${criteria} >>`

  return (
    <Fragment>
      <ItemList>
        <Item label='Label' description='Description' />
        <Item label='Label' description='Description' />
        <Item label='Label' description='Description' />
      </ItemList>

      <ItemList>
        <ItemListTitle title='Articles' />
        <Item label='Label' description='Description' />
        <Item label='Label' description='Description' />
        <Item label='Label' description='Description' />
      </ItemList>

      <ItemList>
        <ItemBigTitle title={showFullResult} />
      </ItemList>
    </Fragment>
  )
}

const SearchPageComponent = ({value, onChange, searchResult}) => (
  <div className='searchPage'>
    <div className='searchBarContent'>
      <SearchBar
        value={value}
        onChange={onChange}
        placeHolder='Cherchez ce que vous voulez...'
      />
    </div>
    {typeof searchResult !== 'undefined' &&
      <div className='searchBarResult'>
        {searchResult}
      </div>
    }
  </div>
)

const SearchPage = class searchPage extends Component {
  state = {
    value: '',
  }

  constructor (props) {
    super(props)

    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  searchResult () {
    /**
      * Fake content loader
      */
    const siz = this.state.value.length

    if (siz > 0 && siz <= 3) {
      return (
        <SearchResult criteria={this.state.value} />
      )
    }
  }

  render () {
    return (
      <SearchPageComponent
        value={this.state.value}
        onChange={this.onValueChange}
        searchResult={this.searchResult()}
      />
    )
  }
}

export default SearchPage
