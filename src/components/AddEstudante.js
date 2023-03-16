const AddEstudante = ()=> {

    return (
        <div className='container forms'>

        <div className='row mb-4'>
          <div className='col-md-12 text-center'>
            <h2 >ADICIONAR ESTUDANTE</h2>
          </div>
          
        </div>
  
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Nome</div>
          <div className='col-md-4'>
            <input type="text" className="form-control" value="" />
          </div>
          <div className='col-md-2'></div>
        </div>
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Nome</div>
          <div className='col-md-4'>
            <input type="text" name='name' className="form-control" value="" />
          </div>
          <div className='col-md-2'></div>
        </div>
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>sobreNome</div>
          <div className='col-md-4'>
            <input type="text" name='last_name' className="form-control" value="" />
          </div>
          <div className='col-md-2'></div>
        </div>
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>Email</div>
          <div className='col-md-4'>
            <input type="email" name='email' className="form-control" value="" />
          </div>
          <div className='col-md-2'></div>
        </div>
        
  
  
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 text-center' >
            <button className='btn btn-primary' >Guardar</button>
          </div>
         
          <div className='col-md-2'></div>
        </div>
      </div>

    )
}
export default AddEstudante;

