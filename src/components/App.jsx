import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import Profile from './Profile.jsx';
import Statistics from './Statistics.jsx';
import FriendList from './FriendList.jsx';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </>
  );
};
