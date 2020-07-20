import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    let  ProductTable = [{id:1 , name:"machine", price:60, category: "electronics"},
                         {id:2, name:"Robe", price:80, category: "clothes"},
                         {id:3, name:"smartPhone", price:100, category: "electronics"},
                         {id:4, name:"Pull", price:50, category: "clothes"}
  
  ];
   return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
      </tr>
    </thead>
    {
      ProductTable.map((item)=> 
    <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
      </tr>
    </tbody>
      )
  }
  </Table>
)
};
}

export default App;