import React from 'react'
import './styles.css'

const SearchResultHeader = ({label, count}) => (
  <div className='searchCriteria'>
    <h1 className='label'>« {label} »</h1>
    <span className='count'>{count} Résultat(s)</span>
  </div>
)

const ResultListItem = ({label, description, price}) => (
  <div className='resultItem'>
    <img className='img' />

    <div className='desc'>
      <label className='firstTitle'>{label}</label>
      <label className='subTitle'>{description}</label>
    </div>

    <div className='descMore'>
      <div className='price'>
        <label className='priceStartAt'>à partir de</label>
        <label className='priceAmount'>{price}</label>
      </div>
      <div className='btnIconShop'></div>
    </div>
  </div>
)

const ResultCategories = ({children}) => (
  <ul className='resultCategories'>
    {children}
  </ul>
)

const ItemCat = ({label}) => (
  <li className='itemCat'>
    <div class='iconCat'></div>
    <label>{label}</label>
  </li>
)

const SearchResult = () => (
  <div className='searchResultPage'>
    <SearchResultHeader
      label='Parfum'
      count='16'
    />

    <ResultCategories>
      <ItemCat label='Cosmétique' />
      <ItemCat label='Alimentaire' />
      <ItemCat label='Catégorie' />
      <ItemCat label='Catégorie' />
    </ResultCategories>

    <div className='resultList'>
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
    </div>

    <div className='productNotOK'>
      <h1 className='titleNotOk'>Le produit n'est pas ici ?</h1>
      <a className='btnCreateCMD'>Personnaliser votre commande</a>
    </div>
  </div>
)

export default SearchResult