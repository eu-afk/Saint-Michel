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
                    <h1>Cadastro</h1>
                    <input placeholder="Nome" name='nome' type='text' />
                    <input placeholder="Idade" name='idade' type='number' />
                    <input placeholder="email" name='email' type='email' />
                    <input placeholder="Senha" name='senha' type='password' />
                    <input placeholder="Digite seu cpf" name='cpf' type='number' />
                    <input placeholder="Endereço" name='endereço' type='text' />

                    <form>
                        <select name="plataforma">
                            <option value="">Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Prefiro não opinar</option>
                        </select>
                    </form>
                    <button type='button' id='button-cadastrar'>Cadastrar</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
