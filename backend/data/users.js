import bcrypt from 'bcryptjs';


const Users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jane',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jana',
        email: 'jana@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    }
];

export default Users;