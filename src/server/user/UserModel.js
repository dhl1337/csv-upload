import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String }
});

export default mongoose.model('User', UserSchema);