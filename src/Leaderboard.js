import React from 'react';
import firebase from './Firebase';

class Leaderboard extends React.Component {
    state = { Users: [] };

    componentDidMount() {
        var that = this;
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
                this.setState({ Users });
            });
    }

    render() {
        return (
            <ol>
                {this.state.Users.map(u => {
                    return (
                        <li key={u.id}>
                            <h4>{u.firstname} <span className='fR'>{u.time} s</span></h4>
                        </li>
                    );
                })}
            </ol>
        );
    }
}

export default Leaderboard;