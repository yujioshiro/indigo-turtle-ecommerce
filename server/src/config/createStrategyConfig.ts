import passport from 'passport';
import { Strategy } from 'passport-local';

const createStrategyConfig = () =>
  passport.use(
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'passwd',
      },
      (email, password, done) => {
        // Do your thing
      }
    )
  );
