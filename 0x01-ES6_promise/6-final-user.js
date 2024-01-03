import signUpUser from './4-user-promise';
import { uploadPhoto } from './utils';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((res) => {
      console.log(`${res[0].firstName} ${res[0].lastName} ${res[1].body}`);
    })
    .catch(() => console.log('Signup system offline'));
}
