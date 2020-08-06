import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader/index';
import Input from '../../components/Input/index';
import warningIcon from '../../assets/images/icons/warning.svg'
import TextArea from './../../components/TextArea/index';
import Select from './../../components/Select/index';
import './styles.css'
import { api } from './../../services/api';
import { useHistory } from 'react-router-dom';

export default function TeacherForm() {
  const history = useHistory();
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: ''
    }
  ])

  const [name, setName] = useState('')
  const [avatar, setAvatar]= useState('')
  const [whatsapp, setWhatsup] = useState('')
  const [bio, setBio] = useState('')
  const [cost, setCost] = useState('')
  const [subject, setSubject] = useState('')


  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, {
      week_day: 0,
      from: '',
      to: ''
    }])
  }

  function setScheduleItemValue (position: number, field:string, value:string) {
    const newSchedule = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem
    })

    setScheduleItems(newSchedule);
  }

  function handleCreateForm(event: FormEvent) {
    event.preventDefault()
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(response => {
      alert('Cadastro realizado com succeso')
      history.push('/')
    }).catch(error => console.log(error))
  }

  return (
    <div id="page-teacher-form" className="container">
     <PageHeader title="Que incrivel que voce quer dar aulas"
        description="O primeiro passoé preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateForm}>
        <fieldset>
          <legend>Seus dados</legend>
            <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} label="Nome Completo" />
            <Input type="text" name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} label="Avatar" />
            <Input type="text" name="whatsapp" value={whatsapp} onChange={(e) => setWhatsup(e.target.value)} label="WhatsApp" />
            <TextArea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
            <Select name={subject} onChange={(e) => setSubject(e.target.value)} value={subject} label="Materia" options={ [
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
            <Input type="text" name={cost} onChange={e => setCost(e.target.value)} label="Custo da sua hora/aula" />
        </fieldset>

        <fieldset>
          <legend>Horarios disponiveis
          <button type="button" onClick={addNewScheduleItem}>+ Novo horario</button>
          </legend>

          {scheduleItems.map ((scheduleItem, index) => 
          <div className="schedule-item" key={scheduleItem.week_day}>
          <Select name="weeek-day" label="Dia da Semaan" value ={scheduleItem.week_day}
          onChange={e=> setScheduleItemValue(index,'week_day', e.target.value)} options={ [
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

            <Input type="time" label="Das"  value ={scheduleItem.from} onChange={e => setScheduleItemValue(index,'from', e.target.value)} name="from"/>
            <Input type="time" label="Ate"  value ={scheduleItem.to} onChange={e => setScheduleItemValue(index,'to', e.target.value)}  name="to"/>
          </div>
            )}

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            <br/>
          </p>

          <button type="submit">Salvar cadastro</button>
        </footer>
        </form>
      </main>
        
    </div>
  )
}