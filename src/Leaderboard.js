import React from 'react';
import firebase from './Firebase';

class Leaderboard extends React.Component {
    //users list
    state = { Users: [] };

    componentDidMount() {
        //populate a list of users with the data from firebase
        firebase
            .firestore()
            .collection('leaderboard')
            .orderBy('time')
            .onSnapshot(querySnapshot => {
                let Users = [];
                querySnapshot.forEach(function (doc) {
                    Users.push({
                        id: doc.id,
                        firstname: doc.data().firstname,
                        time: doc.data().time
                    });
                });
                //update the state
                this.setState({ Users });
            });
    }

    //render a list of users and their times
    render() {
        return (
            <ol>
                {this.state.Users.map(u => {
                    return (
                        <li key={u.id}>
                        {/* ensure the text in each row is aligned both left and right */}
                            <h4>{u.firstname} <span className='fR'>{u.time} s</span></h4>
                        </li>
                    );
                })}
            </ol>
        );
    }
}

export default Leaderboard;