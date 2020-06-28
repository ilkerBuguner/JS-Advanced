function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if(this.comments.includes(comment)) {
                throw new Error(`This comment is already added!`);
            }

            this.comments.push(comment);
            return `Comment is added.`;
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            const result = [`Here is ${this.owner}'s pet ${this.name}.`];
            if(this.comments.length > 0) {
                result.push(`Special requirements: ${this.comments.join(', ')}`);
            }

            return result.join('\n');
        }
    }

    class Cat extends Pet {
        constructor( owner, name, insideHabits, scratching ) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            const result = [super.feed()];
            result.push(`happy and purring.`);
            return result.join(', ');
        }

        toString() {
            const result = [super.toString()];
            result.push(`Main information:`);
            if(this.scratching == false) {
                result.push(`${this.name} is a cat with ${this.insideHabits}`);
            } else {
                result.push(`${this.name} is a cat with ${this.insideHabits}, but beware of scratches.`);
            }

            return result.join('\n');
        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            const result = [super.feed()];
            result.push(`happy and wagging tail.`);
            return result.join(', ');
        }

        toString() {
            const result = [super.toString()];
            result.push(`Main information:`);
            result.push(`${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`);
            return result.join('\n');
        }
    }

    return {
        Pet,
        Cat,
        Dog
    }
}


