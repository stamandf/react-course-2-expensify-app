import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    
        <li><Link to={"/edit/"+id}>{description}</Link>: ${amount} date:{createdAt}</li>
    )

export default ExpenseListItem;