import { getUser, addUser } from './UserController';

export default (app) => {
    app.get('/api/v1/users', getUser);
    app.post('/api/v1/users', addUser);
}