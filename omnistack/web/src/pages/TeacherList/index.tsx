import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherList';
import Input from './../../components/Input/index';
import Select from './../../components/Select/index';
import { api } from './../../services/api';
import { Teacher } from '../../components/TeacherList/index';


export default function TeacherList() {
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])

  async function handleSearchTeachers(event: FormEvent) {
    event.preventDefault()
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
     <PageHeader title="Esses sao os proffys dispoiveis">
       <form id="search-list" onSubmit = {handleSearchTeachers}>
       <Select name="subject" value={subject} onChange={e => setSubject(e.target.value)} label="Materia" options={ [
              {
                value:'Artes',
                label:'Artes',
              },
              {
                value:'Ciencias',
                label:'Ciencias',
              },
              {
                value:'Biologia',
                label:'Biologia',
              },
              {
                value:'Educacao Fisica',
                label:'Artes',
              },
              {
                value:'Fisica',
                label:'Fisica',
              },
              {
                value:'Geografia',
                label:'Geografia',
              },
              {
                value:'Quimica',
                label:'Quimica',
              },
              {
                value:'Historia',
                label:'Historia',
              },
              {
                value:'Portugues',
                label:'Portugues',
              },
              {
                value:'Matematica',
                label:'Matematica',
              },

            ] }/>
       <Select name="weeek-day" value={week_day} onChange={e => setWeekDay(e.target.value)} label="Dia da Semaana" options={ [
              {
                value:'0',
                label:'Domingo',
              },
              {
                value:'1',
                label:'Segunda-Feira',
              },
              {
                value:'2',
                label:'Terca-Feira',
              },
              {
                value:'3',
                label:'Quarta-Feira',
              },
              {
                value:'4',
                label:'Quinta-Feira',
              },
              {
                value:'5',
                label:'Sexta-Feira',
              },
              {
                value:'6',
                label:'Sabado',
              },
            ] }/>
          <Input name="time" label="Hora" type="time" value={time} onChange ={e => setTime(e.target.value)}/>

          <button type="submit">Buscar</button>
       </form>
      </PageHeader> 

      <main>
        {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher}  />)}
      </main>
    </div>
  )
}