import {Fragment} from "react";

const AboutComponent = () =>{
    const AboutMsg  = 'About Our Quiz App\n' +
        'Welcome to our Quiz App, where learning meets fun! Our goal is to provide an engaging and interactive platform for users to create and participate in customized question papers.\n' +
        '\n' +
        'What Sets Us Apart?\n' +
        'User-Created Content:\n' +
        'Our unique feature allows users to contribute their own sets of questions in JSON format. This flexibility empowers educators, trainers, and quiz enthusiasts to tailor the quiz experience to their specific needs.\n' +
        '\n' +
        'Customizable Quizzes:\n' +
        'Whether you\'re a teacher preparing a class quiz or a quizmaster organizing an event, our app lets you create quizzes with ease. Choose the number of questions, set the difficulty level, and watch your customized quiz come to life.\n' +
        '\n' +
        'Interactive Learning:\n' +
        'Quizzes are an excellent way to reinforce knowledge and test comprehension. Our platform encourages interactive learning, making the quiz-taking experience both educational and enjoyable.\n' +
        '\n' +
        'Track Your Progress:\n' +
        'We believe in progress tracking. After completing a quiz, users can review their performance, identify areas for improvement, and track their overall progress over time.\n' +
        '\n' +
        'User-Friendly Design:\n' +
        'Our intuitive design ensures a seamless and user-friendly experience. Whether you\'re a tech-savvy educator or someone exploring quizzes for the first time, our platform is designed with you in mind.\n' +
        '\n' +
        'Get Started!\n' +
        'Ready to embark on a quiz adventure? Sign up, explore user-created quizzes, or create your own. Let\'s make learning a delightful experience together!\n' +
        '\n' +
        'Have fun and happy quizzing!'
    return (
        <Fragment>
            <span>
             <label>{AboutMsg}</label>
            </span>
        </Fragment>
    )
}
export default AboutComponent