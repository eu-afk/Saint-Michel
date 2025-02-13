import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CadastroPage.css';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

function CadastroPage() {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        email: '',
        senha: '',
        cpf: '',
        endereco: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === 'cpf' ? value.replace(/\D/g, '') : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/usuarios/', formData);
            setFormData({
                nome: '',
                idade: '',
                email: '',
                senha: '',
                cpf: '',
                endereco: ''
            });
        } catch (error) {
            console.error('Erro ao cadastrar paciente:', error.message);
        }
    };
    return (
        <>
            <Navbar />
            
            <div className="mainlogin">
                <div className="leftlogin">
                    <h1>Faça o Cadastro </h1>
                    <h1>Outro texto</h1>
                </div>
                <div className="right-login">
                    <div className="card-login">
                        <h1>Cadastro</h1>
                        <div className="textfield">
                            <label for="usuario">Usuário</label>
                            <input type="text" name="usuario" placeholder="Usuário"/>
                        </div>
                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="text" name="senha" placeholder="Senha"/>
                        </div>
                        <div className="textfield">
                            <label for="email">Email</label>
                            <input type="text" name="email" placeholder="Email"/>
                        </div>
                        <button class="btn-cadastro">Cadastrar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );


}

export default CadastroPage;
