class Forum {
    constructor() {
        this.users = [];
        this.questions = [];
        this.id = 1;
    }

    register(username, password, repeatPassword, email) {
        if(username == '' || password == '' || repeatPassword == '' || email == '') {
            throw new Error(`Input can not be empty`);
        }

        if(password != repeatPassword) {
            throw new Error(`Passwords do not match`);
        }
        
        if(this.users.find(u => u.username == username) || this.users.find(u => u.email == email)) {
            throw new Error(`This user already exists!`);
        }

        const newUser = {
            username,
            password,
            email,
            isLoggedIn: false
        };

        this.users.push(newUser);
        return `${username} with ${email} was registered successfully!`
    }

    login(username, password) {
        const user = this.users.find(u => u.username == username && u.password == password)
        if(!user) {
            throw new Error(`There is no such user`);
        }
        user.isLoggedIn = true;
        return `Hello! You have logged in successfully`;
    }

    logout(username, password) {
        const user = this.users.find(u => u.username == username && u.password == password);
        if(!user) {
            throw new Error(`There is no such user`);
        }

        user.isLoggedIn = false;
        return `Hello! You have logged out successfully`;
    }

    postQuestion(username, content) {
        const user = this.users.find(u => u.username == username);

        if(!user || user.isLoggedIn == false) {
            throw new Error(`You should be logged in to post questions`);
        }

        if(content == '') {
            throw new Error(`Invalid question`);
        }

        const newQuestion = {
            id: this.id,
            postingUser: username,
            content,
            answers: []
        };
        this.questions.push(newQuestion);
        this.id++;

        return `Your question has been posted successfull`;
    }

    postAnswer(username, questionId, content) {
        const user = this.users.find(u => u.username == username);
        const targetQuestion = this.questions.find(q => q.id == questionId);

        if(!user || user.isLoggedIn == false) {
            throw new Error(`You should be logged in to post answers`);
        }

        if(content == '') {
            throw new Error(`Invalid answer`);
        }

        if(!targetQuestion) {
            throw new Error(`There is no such question`);
        }

        const newAnswer = {
            answeringUser: username,
            content
        }
        targetQuestion.answers.push(newAnswer);

        return `Your answer has been posted successfully`;
    }

    showQuestions() {
        let result = [];
        this.questions.forEach(question => {
            result.push(`Question ${question.id} by ${question.postingUser}: ${question.content}`);
            question.answers.forEach(answer => {
                result.push(`---${answer.answeringUser}: ${answer.content}`);
            })
        })

        return result.join('\n');
    }
}

let forum = new Forum();

forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');

forum.postQuestion('Jonny', "Do I need glasses for skiing?");
forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
forum.postAnswer('Jonny',1, "What was your budget");
forum.postAnswer('Peter',1, "$50");
forum.postAnswer('Jonny',1, "Thank you :)");

console.log(forum.showQuestions());


