import Jwtpassport from 'passport-jwt'

//database model
import { UserModel } from '../database/User'

const JwtStrategy = Jwtpassport.Strategy;
const ExtractJwt = Jwtpassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoAPP",
}

export default (passport) => {
    passport.use(
        new JwtStrategy(options, async(jwt__payload, done) => {
            try{
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null, false);

                return done(null, doesUserExist);
            }catch(error){
                throw new Error(error);
            }
        })
    )
}