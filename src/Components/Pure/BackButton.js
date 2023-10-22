import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    return (
      <div className="float">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span class="material-symbols-outlined">undo</span>
        </button>
      </div>
    );
}

export default BackButton;
