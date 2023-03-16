const ViewEstudante = ()=> {

    return (
        <div className='container forms'>

        <div className='row mb-4'>
          <div className='col-md-12 text-center'>
            <h2>LISTAR ESTUDANTE</h2>
          </div>
          
        </div>
  
<table className="table">
    <thead>
    <th>Noº</th>
    <th>Nome</th>
    <th>SobreNome</th>
    <th>Email</th>
    <th>Editar</th>
    <th>Eliminar</th>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Manuel</td>
            <td>Luemba</td>
            <td>mmatoso2gmail.com</td>
            <td>Editar</td>
            <td>Eliminar</td>
        </tr>
    </tbody>
</table>

  </div>
       
    )
}
export default ViewEstudante;

