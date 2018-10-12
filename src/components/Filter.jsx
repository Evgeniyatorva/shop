import React from 'react'
import { Menu, Input } from 'semantic-ui-react';


const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {
 
  return (
    <Menu secondary>
      <Menu.Item active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')} >Все</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={setFilter.bind(this, 'price_high')}
      >Цена (дорогие)</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={setFilter.bind(this, 'price_low')}
      >Цена (дешевые)</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}
      >Автор</Menu.Item>
      <Menu.Item
      ><Input icon= 'search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder= 'Введите запрос...' /></Menu.Item>
      
    </Menu>
  )
}

export default Filter;