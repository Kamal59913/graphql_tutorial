import userModel from "../../../../db/models/users";

const addUserResolver = async (parent, args, context) => {
  try {
   console.log("reached here in addUserResolver")
   const { username, email, password, age } = args.input;

   const newUser = new userModel({
    username, email, password, age
   })

   await newUser.save();

   console.log("Some new Users has been added to the database")

  } catch (e) {
    console.log(e);
    return {
      errors: [
        {
          message: 'Something went wrong',
          code: 'SERVER_ERROR',
        },
      ],
    };
  }
};

export default addUserResolver;
