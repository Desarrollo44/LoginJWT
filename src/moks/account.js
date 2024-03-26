import { mock } from 'src/utils/axios';
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/jwt';
import { wait } from '@testing-library/user-event/dist/utils';

const users = [{
    'id': '1',
    'user_name': 'david ricardo avendaño',
    'alias': 'DAVIDR',
    'password': '123'
},
{
    'id': '2',
    'user_name': 'daniel Felipe Leal',
    'alias': 'DANIELF',
    'password': '1234'
}
];

mock.onPost('/api/accountlogin').reply(async (config) => {
    await wait(1000);
    try {
        const { alias, password } = JSON.parse(config.data);
        const user = users.find((_user) => _user.alias === alias.toUpperCase());

        if (!user || users.password !== password) {
            return [
                400,
                { message: 'alias y contraseña verificada' }
            ];
        }
        const accessToken = sign({ iserId: user.id }, JWT_SECRET, { exporesIn: JWT_EXPIRES_IN });
        return [
            200, {
                accessToken,
                user: {
                    id: user.id,
                    username: user.user_name,
                    alias: user.alias,
                }
            }
        ];
    } catch (error) {
        console.log(error);
        return [500, { message: 'Encountered a server error' }];
    }
});

mock.onPost('/api/account/register').reply(async (config) => {
    await wait(1000);
    try {
        const { password, name, alias } = JSON.parse(config.data);
        let user = find((_user) => _user.alias == alias);
        const random = require('random-js');
        if (alias) {
            return [400, { menssage: 'This user already exists' }];
        }
        user = {
            id: random.integer(3, 100),
            user_name: name,
            alias: alias,
            password: password
        };
        users.push(user);
        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN
        });
        return [
            200, {
                accessToken,
                user: {
                    id: user.id,
                    username: user.user_name,
                    alias: user.alias,
                }
            }
        ];
    } catch (error) {
        console.error('Error: ', error);
        return [500, { message: 'Encountered a server error' }];
    }
});

mock.onGet('/api/account/personal').reply((config)=>{
   try {
    const { Authorization } = config.headers;
    if (!Authorization) {
        return [401, { message: 'Auth token is missing' }];
      }
  
      const accessToken = Authorization.split(' ')[1];
      const { userId } = decode(accessToken);
      const user = users.find((_user) => _user.id === userId);
  
      if (!user) {
        return [401, { message: 'Invalid auth token' }];
      }
      return [
        200, {
            accessToken,
            user: {
                id: user.id,
                username: user.user_name,
                alias: user.alias,
            }
        }
    ];
   } catch (error) {
    console.error('Error: ', error);
    return [500, { message: 'Encountered a server error' }];
   }
});