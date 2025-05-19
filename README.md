# Nursing Exams

This project was generated using Angular CLI version 19.2.12.

## Summary

Nursing Exams is an Angular application for managing mental state exams of patients. It allows users to view exams, patient information, and examiner details. The app features Angular Material design components and integrates with a fake API using JSON Server.

## Features

- List of mental state exams with patient and examiner information
- Detailed view for each exam
- Material Design-based UI components
- Integration with JSON Server as a fake API
- In-app navigation using Angular Router
- Environment configuration for easy API endpoint management
- Domain-Driven Design approach

## Documentation

The project follows a component-based architecture with clear separation of concerns:

- **Nursing module:** Manages mental state exams, patients, and examiners
- **Shared module:** Provides base functionality for services and forms

## Frameworks and Libraries

This project uses the following dependencies:

- [Angular Material](https://material.angular.io/)
- [JSON Server](https://github.com/typicode/json-server)

## Fake API Setup

To start the fake API server, run:
```bash
cd server
json-server --watch db.json --port 3000
```
The API endpoints will be accessible at `http://localhost:3000/api/v1`.

Current API resource endpoints:
- `http://localhost:3000/api/v1/mental-state-exams` - Mental state exams
- `http://localhost:3000/api/v1/examiners` - Examiner information
- `http://localhost:3000/api/v1/patients` - Patient information

## Development server

To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
```bash
ng generate component component-name
```
For a complete list of available schematics (such as components, directives, or pipes), run:
```bash
ng generate --help
```

## Building

To build the project, run:
```bash
ng build
```
This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the Karma test runner, use:
```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:
```bash
ng e2e
```
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
