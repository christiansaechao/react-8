Authentication

Login
Require: username and password

Routes
   - /Login
Controllers
   - LogInController()
      - call the service 
      - send back the user information
      - OR send back error
      - validate the response from the db that user exists and has the correct credentials
Services
   - LogInService()
      - Check / query for the user

Sign Up

Routes
   - POST: /sign-up
Controllers
   - SignUpController()
      - username and password
      - hash password here
      - generate jwt token here
      - call service
      - send the user
Services
   - db layer
      - create the user
      - send it back to the controller