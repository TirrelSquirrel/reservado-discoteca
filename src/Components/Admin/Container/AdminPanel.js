import React from 'react';
import { Outlet } from 'react-router-dom';
import BackButton from '../../Pure/BackButton';
import '../../Styles/adminstyles.css'

const AdminPanel = () => {
    return (
        <div className='admin-generic-container'>
            <div className='main-container'>
                <Outlet />
                <BackButton />                
            </div>
        </div>
    );
}

export default AdminPanel;
