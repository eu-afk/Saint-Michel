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
        endereço: '',
        sexo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/pacientes', formData);
            console.log('Paciente cadastrado com sucesso:', response.data);
            // Limpar o formulário após o envio
            setFormData({
                nome: '',
                idade: '',
                email: '',
                senha: '',
                cpf: '',
                endereço: '',
                sexo: ''
            });
        } catch (error) {
            console.error('Erro ao cadastrar paciente:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1>Cadastro</h1>
                    <input placeholder="Nome" name='nome' type='text' value={formData.nome} onChange={handleChange} />
                    <input placeholder="Idade" name='idade' type='number' value={formData.idade} onChange={handleChange} />
                    <input placeholder="Email" name='email' type='email' value={formData.email} onChange={handleChange} />
                    <input placeholder="Senha" name='senha' type='password' value={formData.senha} onChange={handleChange} />
                    <input placeholder="CPF" name='cpf' type='number' value={formData.cpf} onChange={handleChange} />
                    <input placeholder="Endereço" name='endereço' type='text' value={formData.endereço} onChange={handleChange} />
                    <select name="sexo" value={formData.sexo} onChange={handleChange}>
                        <option value="">Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outros">Prefiro não opinar</option>
                    </select>
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
            <Footer />
        </>
    );


}

export default CadastroPage;