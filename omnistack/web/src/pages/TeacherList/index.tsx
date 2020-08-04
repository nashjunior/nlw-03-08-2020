import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherList';


export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
     <PageHeader title="Esses sao os proffys dispoiveis">
       <form id="search-list">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
       </form>
      </PageHeader> 

      <main>
        <TeacherItem/>
      </main>
    </div>
  )
}