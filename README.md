# FitSync

FitSync is a web application that helps users track their fitness progress, discover new exercises, and maintain a healthy lifestyle. This application allows users to create an account, log in, and access features such as profile management and exercise tracking.

## Features

- User authentication: Users can create an account, log in, and log out securely.
- Profile management: Users can view and update their profile information.
- Exercise tracking: Users can browse and search for exercises, track their workout progress, and view their exercise history.
- Responsive design: The application is optimized for various devices, including desktop and mobile.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- Handlebars (templating engine)
- MySQL (database)
- Materialize CSS (CSS framework)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/fit-sync.git`
2. Navigate to the project directory: `cd fit-sync`
3. Install the dependencies: `npm install`
4. Set up the database:
   - Create a MySQL database.
   - Update the database configuration in the `config/config.json` file.
   - Run database migrations: `npx sequelize-cli db:migrate`
   - (Optional) Seed the database with sample data: `npx sequelize-cli db:seed:all`
5. Start the application: `npm start`
6. Access the application in your web browser at `http://localhost:3001`

## Usage

- Create an account or log in if you already have one.
- Navigate to the profile page to view and update your profile information.
- Explore the exercises page to browse and search for exercises.
- Track your workout progress by adding exercises to your workout log.
- Log out when you're finished using the application.

## Contributing

Contributions are welcome! If you'd like to contribute to FitSync, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Implement your feature or make improvements.
4. Commit your changes: `git commit -m "Add feature-name"`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or suggestions, feel free to reach out to the project maintainer at [marshall.peters01@gmail.com](mailto:marshall.peters01@gmail.com).
