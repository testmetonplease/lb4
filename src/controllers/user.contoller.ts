// import {inject, Context} from '@loopback/context';

// /**
//  * A UserController implementation that depends on UserRepository and PasswordHasher
//  */
// class UserController {
//   // UserRepository and PasswordHasher are injected via the constructor
//   constructor(
//     @inject('repositories.UserRepository') private userRepository: UserRepository,
//     @inject('utilities.PasswordHasher') private passwordHasher: PasswordHasher,
//   ) {}

//   /**
//    * Login a user with name and password
//    */
//   async login(userName: string, password: String): boolean {
//     const hash = this.passwordHasher.hash(password);
//     const user = await this.userRepository.findById(userName);
//     return user && user.passwordHash === hash;
//   }
// }

// // const ctx = new Context();
// // // Bind repositories.UserRepository to UserRepository class
// // ctx.bind('repositories.UserRepository').toClass(MySQLUserRepository);
// // // Bind utilities.PasswordHash to a function
// // ctx.bind('utilities.PasswordHash').to(PasswordHasher)
// // // Bind the UserController class as the user management implementation
// // ctx.bind('controllers.UserController').toClass(UserController);

// // // Locate the an instance of UserController from the context
// // const userController: UserController = await ctx.get<UserController>('controller.UserController');
// // // Run the login()
// // const ok = await userController.login('John', 'MyPassWord');