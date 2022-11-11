import PropTypes from 'prop-types';

const UserData = ({user}) => {
  return (
    <li>
        <h5>{user.first_name} {user.last_name}</h5>
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <h6>Id: {user.id}</h6>
        <a href={user.email}>{user.email}</a>
    </li>
  )
}

UserData.propTypes = {
    user: PropTypes.shape({ 
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
}

export default UserData