import Pusher from 'pusher-js';

const socket = new Pusher('91137c32cc89fe3f12ce', {
    cluster: 'us2',
    encrypted: true,
    authEndpoint: 'http://localhost:4000/pusher/auth'
});

export default socket;
