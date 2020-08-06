import React from 'react';
import './styles.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import { Link } from 'react-router-dom';
import { api } from './../../services/api';

export interface Teacher {
  
    avatar:string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    user_id:string,
    whatsapp:string
  
}
interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem:React.FC <TeacherItemProps> = ({teacher}) =>{

  function handleCreateConnection () {
    api.post('connections', {
      user_id: teacher.id
    })
  }
  return (
    <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt="Person"/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>
          <p>
              {teacher.bio}
            </p>
          <footer>
            <p>
              Preco/Hora
              <strong>R${teacher.cost}</strong>
            </p>
            <a target="_blank" href={`https://wa.me/${teacher.whatsapp}`}><img src={whatsAppIcon} onClick={handleCreateConnection} alt="Whatsapp"/>Entrar em contato</a>

          </footer>
        </article>
  )
}

export default TeacherItem