import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function CustomLink() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        if (window.location.href === 'http://localhost:5173/homepage') {
            navigate('/home-page');
        } else {
            navigate('/not-found');
        }
    };
  return (
    <div>
    <Link to="/" onClick={handleNavigation}>Go to HomePage</Link>
</div>
  )
}
