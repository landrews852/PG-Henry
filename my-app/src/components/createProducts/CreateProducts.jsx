import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';
//import { GET_PRODUCTS, POST_PRODUCTS } from './../../redux/types';
import { getProducts, postProducts } from '../../redux/Actions';
import './NewActivity.css';




function validacion(input) {

    let errors = {};
    let nameTest = /^[a-zA-ZA-y\s]{10,80}$/; // solo letras, de 3 a 80 caracteres

    if (!input.name) errors.name = 'Required Field'
    else if (!nameTest.test(input.name.trim())) errors.name = 'This Field Only Supports Letters ( 10 - 80 )'
    else if (!input.description) errors.description = 'Required Field'
    else if (!input.time) errors.time = 'Required Field'
    else if (!input.category) errors.category = 'Required Field'
    else if (!input.size_S) errors.size_S = 'Required Field'
    else if (!input.size_M) errors.size_M = 'Required Field'
    else if (!input.size_L) errors.size_L = 'Required Field'

    return errors
}

export default function CreateProducts() {

    const dispatch = useDispatch()
    const history = useHistory()


    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({

        name: '',
        description: '',
        img: '',
        time: 0,
        category: '',
        size_S: 0,
        size_M: 0,
        size_L: 0

    })

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validacion({
            ...input,
            [e.target.name]: e.target.value
        }));
    }


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postProducts(input))
        alert('Successfully Created Product!')
        setInput({
            name: '',
            description: '',
            img: '',
            time: 0,
            category: '',
            size_S: 0,
            size_M: 0,
            size_L: 0

        })
        history.push('/home') // luego lo redirigimos al detalle del producto??
    }




    return (

        <div>
            <Link to='/home'> <button className='boton'>Back</button></Link>
            <h2>New Product </h2>

            <form onSubmit={e => handleSubmit(e)}>

                <div>
                    <strong>Name  </strong>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        autoComplete='off'
                        onChange={e => handleChange(e)} />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>


                <div>
                    <strong>Description </strong>
                    <input
                        type='text'
                        value={input.description}
                        name='description'
                        onChange={e => handleChange(e)} />

                    {errors.description && (
                        <p>{errors.description}</p>
                    )}
                </div>

                <div>
                    <strong>Image  </strong>
                    <input
                        type='text'
                        value={input.img}
                        name='img'
                        onChange={e => handleChange(e)} />

                </div>

                <div>
                    <strong>Time </strong>
                    <input
                        type='number'
                        placeholder="days"
                        step="2"
                        min='2'
                        max='10'
                        value={input.time}
                        name='time'
                        onChange={e => handleChange(e)} />

                    {errors.time && (
                        <p>{errors.time}</p>
                    )}
                </div>

                <div>
                    <strong>Category </strong>

                    <select onChange={(e) => handleChange(e)} value={input.category} name="category">
                        <option value='Bautism'>Bautism</option>
                        <option value='Wedding'>Wedding</option>
                        <option value='Classic'>Classic</option>
                        <option value='Corporative'>Corporative</option>
                        <option value='Childrens Cake'>Childrens Cake</option>
                        <option value='15 years'>15 years</option>
                        <option value='Personalized'>Personalized</option>
                    </select>

                    {errors.category && (
                        <p>{errors.category}</p>
                    )}
                </div>

                <div>
                    <strong>Size_S </strong>
                    <input
                        type='number'
                        value={input.size_S}
                        name='size_S'
                        onChange={e => handleChange(e)} />

                    {errors.size_S && (
                        <p>{errors.size_S}</p>
                    )}
                </div>

                <div>
                    <strong>Size_M </strong>
                    <input
                        type='number'
                        value={input.size_M}
                        name='size_M'
                        onChange={e => handleChange(e)} />

                    {errors.size_M && (
                        <p>{errors.size_M}</p>
                    )}
                </div>

                <div>
                    <strong>Size_L </strong>
                    <input
                        type='number'
                        value={input.size_L}
                        name='size_L'
                        onChange={e => handleChange(e)} />

                    {errors.size_L && (
                        <p>{errors.size_L}</p>
                    )}
                </div>



                {
                    errors.hasOwnProperty('name') ||
                        errors.hasOwnProperty('description') ||
                        errors.hasOwnProperty('category') ?
                        <p> Please Complete the Required Fields </p> :
                        <button type='submit' className='boton'>Create! </button>
                }

                {/*   <button
                    disabled={errors.name || errors.difficulty || errors.pais}
                    type='submit' className='boton' >
                    Create!
                </button> */}

            </form >


        </div >



    )


}

