### Demo

<img src='https://imgur.com/a/0CbveMK' title='video demo' width='' alt='Video demo'/>

### Referencias

##### UI

- [React UI components](https://ui.docs.amplify.aws/react/components/flex)

##### Autenticacion

- [Amplify Authentication](https://aws.amazon.com/blogs/mobile/amplify-uis-new-authenticator-component-makes-it-easy-to-add-customizable-login-pages-to-your-react-angular-or-vue-app/)
- [Autenticacion con React y Amplify - Guia paso a paso](https://welearncode.com/amplify-authenticator/)
- [Autenticacion con React y Amplify usando Command Line](https://blog.logrocket.com/authentication-react-aws-amplify-cognito/)

##### Routing(Navegacion)

- [Crear links en React (Navegacion usando React router)](https://stackabuse.com/programmatically-navigate-using-react-router/)
- [Navegacion en React](https://rookiecoder.medium.com/react-button-click-navigate-to-new-page-6af7397ea220)

##### Mapa

- [ Mostrar un mapa usando amplify (Amplify documentation)](https://docs.amplify.aws/lib/geo/maps/q/platform/js/)

## Links

- [Curso video en espanol sobre AWS ](https://marcia.dev/courses/sls-esp/)
- [Tutorial de React](https://ibaslogic.com/react-tutorial-for-beginners/)
- [Aws hosting and publish - Quick start amplify and React](https://docs.amplify.aws/start/getting-started/hosting/q/integration/react/)
- [https://codesandbox.io/s/geo-testing-app-gwwgr?file=/src/App.js](https://codesandbox.io/s/geo-testing-app-gwwgr?file=/src/App.js)
- [https://www.freecodecamp.org/news/vscode-react-setup/](https://www.freecodecamp.org/news/vscode-react-setup/)
- [React CheatSheet](https://www.freecodecamp.org/news/the-react-cheatsheet/#react-components)
- [Javscript essentials for React](https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/)

#### Amazon S3

- [Deploy React app with S3](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f08)

- [Deploy React on AWS S3](https://www.cloudthat.com/resources/blog/step-by-step-guide-to-deploy-reactjs-app-on-aws-s3)

- [Deploy React on Amazon S3](https://aws.plainenglish.io/deploy-react-apps-on-amazon-s3-95bb9f5870d1)

#### Remove was-export from git

- [Remove aws-export.js from git](https://stackoverflow.com/questions/61514515/missing-aws-exports-js-always-when-building-aws-amplify-react-app-with-amplify-i)

#### AWS workshop

- [https://catalog.us-east-1.prod.workshops.aws](https://catalog.us-east-1.prod.workshops.aws)
- [hands on full stack react app](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/?ref=gsrchandson&id=updated)

#### AWS amplify and Cognito

- [https://tsh.io/blog/aws-amplify-studio-tutorial/](https://tsh.io/blog/aws-amplify-studio-tutorial/)
- [https://blog.thundra.io/how-to-build-an-application-in-minutes-with-aws-amplify](https://blog.thundra.io/how-to-build-an-application-in-minutes-with-aws-amplify)
- [https://beabetterdev.com/2022/06/26/amazon-cognito-a-complete-beginner-guide/](https://beabetterdev.com/2022/06/26/amazon-cognito-a-complete-beginner-guide/)

#### Amazon location services

-[https://aws.amazon.com/blogs/mobile/add-maps-to-your-app-in-3-steps-with-aws-amplify-geo/](https://aws.amazon.com/blogs/mobile/add-maps-to-your-app-in-3-steps-with-aws-amplify-geo/)

- [Amazon location services for Android](https://aws.amazon.com/blogs/mobile/add-maps-to-your-android-app-with-aws-amplify-geo-powered-by-amazon-location-service/)

## Amplify

Amplify is a frontend library for interacting with backend services hosted on AWS.

### Bucket policy Amazon S3

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::amplify-tracker-dev-195533-deployment/*"
        }
    ]
}
```
