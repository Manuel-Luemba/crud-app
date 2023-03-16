const EditEstudante = ()=> {

    return (
        <div className='container forms'>

        <div className='row mb-4'>
          <div className='col-md-12 text-center'>
            <h2>EDITAR ESTUDANTE</h2>
          </div>
          
        </div>
  
  <form onSubmit={""} >
    

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
            <button className='btn btn-primary' >Editar</button>
          </div>
         
          <div className='col-md-2'></div>
        </div>

        </form>
      </div>

    )
}
export default EditEstudante;

