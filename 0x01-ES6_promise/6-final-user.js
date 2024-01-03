import signUpUser from './4-user-promise';
import { uploadPhoto } from './utils';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      const [user, photo] = results;
      return [user.firstName, user.lastName, photo.body];
    })
    .catch(() => {
      throw new Error('Signup system offline'); // Rethrow for proper error handling
    });
}
