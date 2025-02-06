import React from 'react'
import './banner.css'
function Banner() {
    return (
        <>
            <img src="../src/img/Banner-Baixo-Sobre.png" alt="" className='Banner-Baixo-Sobre' />
            <div className="container-text">
                <h1 id='aspas'>"</h1>
                <p className='texto-banner-baixo-sobre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.</p>
                <div className="linhaTop">
                    <hr id="linha" />
                </div>
                <p className='texto-banner-baixo-sobre'>John Doe</p>
            </div>
        </>

    )
}

export default Banner