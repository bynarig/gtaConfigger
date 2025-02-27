import {hash, genSalt} from 'bcrypt';

export default new class Bcrypt {
  // When a user sends us their password to log in we will use this
// function to decrypt it. It takes in the password they will send
// us as they try to log in (unhashedPassword), then the salt and the
// password we stored in the database (hashedPassword).
  static decrypt(unhashedPassword: string, salt: string, hashedPassword: string) {
    hash(unhashedPassword, salt, function(err, key) {
      if (hashedPassword === key) {
        console.log('Successful decryption');
      } else {
        console.log('Unsuccessful decryption');
      }
    });
  }

// This is the encryption function we use when a user wants to create
// an account. It takes in their username and password, generates a
// salt, then hashes the password together with the salt. Normally
// we would store the hashed password and salt, but in this case we
// will pass to the previously defined decrypt function to show how
// it works
  static encrypt(password: string) {
    genSalt(10, function(err, salt) {
      hash(password, salt, function(err, key) {
        console.log('bcrypt Store the salt: ' + salt + ' and hash: ' + key);
        Bcrypt.decrypt(password, salt, key);
      });
    });
  }
};