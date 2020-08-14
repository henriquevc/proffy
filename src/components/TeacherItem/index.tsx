import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.ftjl1-1.fna.fbcdn.net/v/t1.0-1/p240x240/78687677_10157687313418397_3996625660595404800_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_eui2=AeGtaBOEbSGuBwT5rDfPijNeViiJIjQOVaJWKIkiNA5VohJrRPelJEPIU2b_fBoYi9A&_nc_ohc=6hXB1_JqPNAAX9Cvq1o&_nc_ht=scontent.ftjl1-1.fna&tp=-6&oh=d8ad92204b7da96eb12f51df1455ee8c&oe=5F59544B" alt="Henrique Carvalho"/>
                <div>
                    <strong>Henrique Vilanova</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Melhor matematico da atu4l1d4d3
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat aperiam impedit libero fuga dignissimos distinctio dolorum vel consequuntur tempora deserunt ea, incidunt voluptatibus nesciunt cumque officiis perspiciatis est nostrum!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem