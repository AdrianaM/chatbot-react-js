import React from 'react';

const Header = props => {
    return (
        <header className="header">
          <div style={{padding: '20px'}}>
            <img className="rotating-pickle" src="https://vignette.wikia.nocookie.net/clubpenguin/images/7/71/Pickle.png/revision/latest?cb=20140205184407" alt="" width="120" height="120" />
          </div>

          <h1>
            Welcome to Pickle Chat!
          </h1>
        </header>        
    )
}

export default Header;

