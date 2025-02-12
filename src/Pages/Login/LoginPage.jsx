import React from 'react'
import './LoginPage.css'
import Navbar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <form>
                    <h1>Login</h1>
                    <input placeholder="Nome" name='nome' type='text' />
                    <input placeholder="Idade" name='idade' type='number' />
                    <input placeholder="email" name='email' type='email' />
                    <input placeholder="Senha" name='senha' type='password' />
                    <input placeholder="Digite seu cpf" name='cpf' type='number' />
                    <button type='button' id='button-cadastrar'>Login</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

