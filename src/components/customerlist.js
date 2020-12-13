import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


export default function Customerlist() {

    const [customers, setCustomers] = useState([]);
    


    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const columns = [
        
        {
        Header: 'Etunimi',
        accessor: 'firstname'
    },
    {
        Header: 'Sukunimi',
        accessor: 'lastname'
    },
    {
        Header: 'Sähköpostiosoite',
        accessor: 'email'
    },
    {
        Header: 'Puhelinnumero',
        accessor: 'phone'
    },
    {
        Header: 'Osoite',
        accessor: 'streetaddress'
    },
    {
        Header: 'Postinumero',
        accessor: 'postcode'
    },
    {
        Header: 'Kaupunki',
        accessor: 'city'
    },
   
   

    ]

    return (

        <div>
            
            <ReactTable filterable={true} data={customers} columns={columns} className="-striped -highlight" />
         
        </div>
    );
}