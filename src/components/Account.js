import React from 'react';
import './Account.css'


const Account = (props) => {
    return(
        <div className="col-md-4 account-background" >
             <h4> Mesa No {props.numberTable}</h4>
                
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th scope="col">Index</th> */}
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((item, index) =>
                    <tr key={index}>
                        <td>{item.food}</td>
                        <td>${item.price}</td>
                        <td><button className="btn btn-default btn-lg btn-border"
                                type="button" 
                                onClick={()=> props.removeOrder(index)}>  
                                <img className="icon-account" src="https://i.ibb.co/JybpHmg/garbage-icon-png-3.png" alt="icon-account" /> 
                            </button>
                        </td>
                    </tr>
                    )}
                    <tr>
                        <td className="h5">  TOTAL: </td>
                        <td className="h5"> ${props.total}</td>
                        <td> <button type="button" 
                            className="bt btn-primary kitchen-btn"
                            onClick={()=> props.onSubmit()}>
                            Enviar a Cocina
                            </button> 
                        </td>
                    </tr>             
                </tbody>
            </table>

            <div>
                
            </div>
            
        </div>
    );  
} //en arrowfunction quito this

export default Account;


