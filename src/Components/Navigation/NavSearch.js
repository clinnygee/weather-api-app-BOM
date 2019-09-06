import React from 'react';

class NavSearch extends React.Component {

    state = {
        search: '',
    }

    handleSearchChange = (e) => {
        this.setState({search: e.target.value});

        
    }

    handleNavSearchClick = (e) => {
        e.preventDefault();

        this.props.onNavSearchClick(this.state.search);
    }

    render(){
        return (
            <div className='sidebar-nav-item-large search-container'>
                <div className='sidebar-nav-search'>
                    <form className='sidebar-nav-search-form'>
                        <input type='text' onChange={this.handleSearchChange} placeholder='Enter Location' required className='search-box'>
                        
                        </input>
                        <button className = 'search-button' onClick={this.handleNavSearchClick}>
                            <img src='./search.svg' className='search-icon'></img>
                        </button>
                    </form>
                </div>
                <div className='sidebar-nav-currentlocation'>
                    
                </div>
                
            </div>
        )
    }
}

export default NavSearch;