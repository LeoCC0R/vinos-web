/* Navigation bar*/

/* buscar como separar todos y que el login quede hasta la derecha, agregarle una lupa y el carrito */
import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

export default function NavBar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //True > False or False > True
        setClicked(!clicked)
    }
  return (
    <>
    <NavContainer>
        <h2>Vinos <span>Viñedo</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a onClick={handleClick} href="/">EXCLUSIVOS</a>
            <a onClick={handleClick} href="/">VINOS</a>
            <a onClick={handleClick} href="/">VIÑEDOS</a>
            <a onClick={handleClick} href="/">LOGIN</a>
        </div>
        <div className='burguer'>
            <BurguerButton clicked= {clicked} handleClick={handleClick}/>
        </div>
        <BigDiv className={`initial ${clicked ? ' active' : ''}`}></BigDiv>
    </NavContainer>

    

    </>
  )
}

const NavContainer = styled.nav`
h2 {
    color: black;
    font-weight: 400;
    font-family: Serif;
    span {
        font-family: Serif;
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #F5F5DD;
display: flex;
align-items: center;
justify-content: space-between;

a {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
}
body{
    background-color: #F5F5DD;
}
.links {
    position: absolute;
    font-family: Serif;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a {
        color: black;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: black;
            display: inline;
        }
        display: block;
    }
}

.links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: black;
    }
}

.burguer {
    @media(min-width: 768px){
        display: none;
    }
}
`


const BigDiv = styled.div`
    background-color: #722F37;
    position absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;

    &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
`