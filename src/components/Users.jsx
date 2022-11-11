import PropTypes from 'prop-types';

import UserData from './UserData';

const Users = (props) => {
  return (
    <>
        <h3>User List</h3>
        { props.usersList.length == 0 && <h4>No hay usuarios para mostrar</h4>}
        { props.usersList.length > 0 && (
          <ul>
              { props.usersList.map( user => <UserData key={user.id} user={user} /> ) }
          </ul>
        )}
    </>
  )
}

Users.propTypes = {
    usersList: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number,
            first_name: PropTypes.string,
            last_name: PropTypes.string,
            email: PropTypes.string,
        })
    ).isRequired,
}

export default Users