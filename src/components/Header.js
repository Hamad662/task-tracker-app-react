import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showTask}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showTask ? 'red': 'green'} text={showTask ? 'Close' : 'Add'} onClick={onAdd}/>}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const HeadingStyle = {
//     color: "red",
//     background: "yellow",
// }

export default Header
