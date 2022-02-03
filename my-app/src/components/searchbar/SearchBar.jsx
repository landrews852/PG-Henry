import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getProducts } from '../redux/Actions';
import './SearchBar.css';


export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }

    /* function handleSubmit(e){
        e.preventDefault();
        dispatch(getProducts(name));
        setName('');
    } */

    return (
      <div className="search-bar">
           <input className="input-searchbar"
           value={name} type="text"
           placeholder="Search your product here..."
              onChange={handleInputChange}
           />
           <button className="btn-searchbar" type="submit" >Search</button>
      </div>
    )

}