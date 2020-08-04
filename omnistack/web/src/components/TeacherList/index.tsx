import React from 'react';
import './styles.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

export default function TeacherItem(){
  return (
    <article className="teacher-item">
          <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg" alt="Person"/>
            <div>
              <strong>Person</strong>
              <span>Materia</span>
            </div>
          </header>
          <p>
              Professor para concursos
            </p>
          <footer>
            <p>
              Preco/Hora
              <strong>R$20,00</strong>
            </p>
            <button><img src={whatsAppIcon} alt="Whatsapp"/>Entrar em contato</button>

          </footer>
        </article>
  )
}