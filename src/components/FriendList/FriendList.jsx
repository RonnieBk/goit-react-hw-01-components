import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const styleList = {
  margin: '50px auto',
  listStyle: 'none',
  width: '250px',
  padding: 0,
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList" style={styleList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
