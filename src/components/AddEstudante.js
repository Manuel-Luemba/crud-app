import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";




const AddEstudante = ()=> {
const [student, setStudent] = useState((
  {
    'nome':'Manuel',
    'sobrenome':'Luís',
    'email':'malui2hotmail.com',
  }
));

const [nome,sobrenome,email] = student;

const handleChange = ((e) =>{

  setStudent({...student,[e.target.name]:e.target.value });
})

const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log(e);
}

    return (
        <div className='container forms'>

        <div className='row mb-4'>
          <div className='col-md-12 text-center'>
            <h2 >ADICIONAR ESTUDANTE</h2>
          </div>
          
        </div>
  
        <form onSubmit={e=>handleSubmit(e)}>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Nome</div>
          <div className='col-md-4'>
            <input type="text"
             className="form-control"
              name='nome'
             value={nome} 
             onChange={e=>handleChange(e)}
             />
          </div>
          <div className='col-md-2'></div>
        </div>
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>sobreNome</div>
          <div className='col-md-4'>
            <input type="text" 
            name='sobrenome' 
            className="form-control"
             value={sobrenome}
             onChange={e=>handleChange(e)}
             />
          </div>
          <div className='col-md-2'></div>
        </div>
  
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Email</div>
          <div className='col-md-4'>
            <input type="email" 
            name='email'
             className="form-control" 
             value={email} 
             onChange={e=>handleChange(e)}
             />
          </div>
          <div className='col-md-2'></div>
        </div>
        
  
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 text-center' >
            <button className='btn btn-primary' >Salvar</button>
          </div>
         
          <div className='col-md-2'></div>
        </div>

        </form>

      </div>

    )
}
export default AddEstudante;

