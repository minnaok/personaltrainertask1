import moment from 'moment';
import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


export default function Trainingslist() {

    const [trainings, setTrainings] = useState([]);
    


    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const columns = [
        
        {
        Header: 'Päivämäärä',
        id:"formatDate",
        accessor: d => {
            return moment(d.date).format("DD-MM-YYYY HH:mm")
        }
    },
    {
        Header: 'Kesto',
        accessor: 'duration'
    },
    {
        Header: 'Aktiviteetti',
        accessor: 'activity'
    },
    {
        Header: 'Asiakas',
        accessor: 'customer.lastname'
    },
   

    ]

    return (

        <div>
            
            <ReactTable filterable={true} data={trainings} columns={columns} className="-striped -highlight" />
         
        </div>
    );
}