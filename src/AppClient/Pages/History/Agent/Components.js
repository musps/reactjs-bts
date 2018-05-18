import React, { Component, Fragment} from 'react';
import './styles.css'
import './stylesCourseDetail.css'
import classNames from 'classnames'
import BtnTime from '@appCl/Components/BtnTime'

const HistoryPage = ({children}) => (
  <div className='historyPage'>
    {children}
  </div>
)
const HPTitle = ({title}) => (
  <div className='hp-title'>
    <h1>{title}</h1>
  </div>
)

export const SearchBar = ({criteria, onChange}) => (
  <div className='hp-c-searchBar'>
    <input
      className='searchBarInput'
      type='text'
      placeholder='Recherche rapide'
      value={criteria}
      onChange={onChange}
      />
    <div className='icon icon-calendar'></div>
  </div>
)

const HPContent = ({left, right}) => (
  <div className='hp-content'>
    <div className='hp-c-left'>
      {left}
    </div>
    <div className='hp-c-right'>
      {right}
    </div>
  </div>
)

const CourseDetail = ({children}) => (
  <div className='courseDetail'>
    {children}
  </div>
)

const CDHeader = ({date, number}) => (
  <div className='cd-header'>
    <h1>{date}</h1>
    <label>Commande #{number}</label>
  </div>
)

const CDProducts = ({ticket, detail}) => (
  <div className='cd-products'>
    <div className='cd-p-ticket'>
      {ticket}
    </div>
    <div className='cd-p-detail'>
      {detail}
    </div>
  </div>
)

const BtnFacture = ({bc, label, icon}) => {
  const cls = classNames({
    btnFacture: true,
    [bc]: true
  })

  return (
    <button className={cls}>
      <div className={`icon ${icon}`}></div>
      <label className='label'>{label}</label>
    </button>
  )
}

/**
  * PAGES.
  */

const Ticket = () => (
  <ListTicket>
    <LTItem qte='1' name='Banane rose avec des tâches' price='3,99' />
    <LTItem qte='2' name='Orange de New York' price='4,10' />
    <LTItem qte='1' name='Kiwi de l’espace' price='5,00' />
    <LTDivider />
    <LTPriceInfo name='Livraison' price='4,95' />
    <LTPriceInfo name='Total' price='18,04' />
  </ListTicket>
)

const ListTicket = ({children}) => (
  <div className='listTicket'>
    {children}
  </div>
)

const LTItem = ({qte, name, price}) => (
  <div className='lt-item'>
    <div className='qte'>{qte}x</div>
    <div className='name'>{name}</div>
    <div className='price'>{price} $</div>
  </div>
)

const LTPriceInfo = ({name, price}) => (
  <div className='lt-priceInfo'>
    <div className='name'>{name}</div>
    <div className='price'>{price} $</div>
  </div>
)

const LTDivider = () => (
  <div className='lt-divider'></div>
)

const Detail = ({bc}) => (
  <div className='detailTicket'>
    <div className='btnList'>
      <BtnFacture label='Facture' icon='icon-facture' />
      <BtnFacture label='Ticket' icon='icon-receipt' />

    </div>
  </div>
)

const ContentLeft = ({items}) => (
  <div className='contentLeft'>
    <HistoryList>
      {items}
    </HistoryList>
  </div>
)

/**
  * CONTENT LEFT
  */

export const HistoryItem = ({title, shop, date, price, isSelected, onClickSelected}) => {
  const cls = classNames({
    historyItem: true,
    isSelected: isSelected
  })

  return (
    <div className={cls}>
      <div className='itemCategory'>
        <div className='icon'></div>
      </div>

      <div className='itemContent'>
        <HTContent
          onClickSelected={onClickSelected}
          title={title}
          shop={shop}
          date={date}
          price={price}
        />
      </div>

      <div className='itemImage'>
        <div className='image'></div>
      </div>
    </div>
  )
}

const HTContent = ({title, shop, date, price, onClickSelected}) => (
  <Fragment>
    <h1 onClick={onClickSelected}>{title}</h1>
    <div className='shop'>
      <div className='icon'></div>
      <label className='label'>{shop}</label>
    </div>
    <div className='tt'>
      <div className='date'>
        {date}
      </div>
      <div className='price'>
        {price}
      </div>
    </div>
    <div>
      <BtnFacture bc='white' icon='icon-replay' label='Repasser cette commande' />
    </div>
  </Fragment>
)

const HistoryList = ({children}) => (
  <div className='historyList'>
    {children}
  </div>
)

const CDDeliveryInfoTimeDate = ({title, value}) => (
  <div className='timeDateList'>
    <label className='title'>{title}</label>
    <label className='value'>{value}</label>
  </div>
)

const CDDeliveryInfo = () => (
  <div className='cd-deliveryInfo'>
    <div className='left'>
      <div className='time'>
        <div className='time-date'>
          <CDDeliveryInfoTimeDate title='Départ' value='10h00' />
          <CDDeliveryInfoTimeDate title='Arrivé' value='10h30' />
        </div>
        <div className='time-min'>
          <BtnTime value='30 mins' />
        </div>
      </div>
    </div>
    <div className='right'>
    </div>
  </div>
)

const CDDeliveryMapAndAddrs = ({addrHome, addrDest}) => (
    <div className='cd-deliveryMapAndAddrs'>
      <div className='map'>
        <div className='mapIn'></div>
      </div>
      <div className='addrs'>
        <div className='addr'>
          <div className='icon icon-home'></div>
          <label className='label'>{addrHome}</label>
        </div>
        <div className='addr'>
          <div className='icon icon-dest'></div>
          <label className='label'>{addrDest}</label>
        </div>
      </div>
    </div>
)

const ContactItem = ({icon, text}) => (
  <button className='contactItem'>
    <div className={`icon ${icon}`}></div>
    <label className='text'>{text}</label>
  </button>
)

const CDAgentInfo = ({agentFullName}) => (
  <div className='cd-agentInfo'>
    <div className='cd-ai-agent'>
      <div className='icon-agent'></div>
      <div className='agent-info'>
        <label className='title'>Votre agent</label>
        <label className='value'>{agentFullName}</label>
      </div>
    </div>
    <div className='cd-ai-contact'>
      <ContactItem icon='icon-stars' text='Noter cette course' />
      <ContactItem icon='icon-buble' text='Un problème ? Contactez le service client' />
    </div>
  </div>
)

/**
  * END CONTENT LEFT
  */

const ContentRight = () => (
  <CourseDetail>
    <CDHeader date='Vendredi 5 Avril 2018' number='DJ0515' />
    <CDProducts
      ticket={<Ticket />}
      detail={<Detail />}
    />
    <CDDeliveryInfo />
    <CDDeliveryMapAndAddrs
      addrHome='3, Rue des Maurais 75012 PARIS'
      addrDest='120, Rue Alfonse Braud 75012 PARIS'
    />
    <CDAgentInfo agentFullName='Samuel Richard' />

  </CourseDetail>
)

const HistoryAgentComponent = ({items}) => (
  <HistoryPage>
    <HPTitle title='Historique des commandes' />
    <HPContent left={<ContentLeft items={items} />} right={<ContentRight />} />
  </HistoryPage>
)

export default HistoryAgentComponent
