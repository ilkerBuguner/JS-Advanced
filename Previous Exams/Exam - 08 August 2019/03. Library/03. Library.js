class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            'normal': 'normal',
            'special': 'special',
            'vip': 'vip'
        };
    }

    subscribe(name, type) {
        if(type == 'normal' || type == 'special' || type == 'vip') {
            const subscriber = this.subscribers.find(x => x.name == name);
            if(subscriber) {
                subscriber.type = type;
            } else {
                const newSubscriber = {
                    name,
                    type,
                    books: []
                };

                this.subscribers.push(newSubscriber);

                return newSubscriber;
            }

            return subscriber;
        } else {
            throw new Error(`The type ${type} is invalid`);
        }
    }

    unsubscribe(name) {
        let subscriber;

        for (let i = 0; i < this.subscribers.length; i++) {
            let currentSubscriber = this.subscribers[i];
            if(currentSubscriber.name == name) {
                subscriber = currentSubscriber;
                this.subscribers.splice(i, 1);
            }
        }

        if(!subscriber) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        const subscriber = this.subscribers.find(s => s.name == subscriberName);

        if(!subscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        } else {
            const newBook = {
                'title': bookTitle,
                'author': bookAuthor
            };

            if(subscriber.type === 'normal' && subscriber.books.length < this.libraryName.length ||
               subscriber.type === 'special' && subscriber.books.length < this.libraryName.length * 2 ||
               subscriber.type === 'vip' && subscriber.books.length < Number.MAX_SAFE_INTEGER) {
                subscriber.books.push(newBook);
                return subscriber;
            } else {
                throw new Error(`You have reached your subscription limit ${subscriber.books.length}!`);
            }
        }
    }

    showInfo () {
        if(this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        let result = '';
        this.subscribers.forEach(subscriber => {
            result += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\n`;
            result += `Received books: `;
            const newBooksArray = []; 
            subscriber.books.forEach(book => {
                newBooksArray.push(`${book.title} by ${book.author}`);
            });
            result += newBooksArray.join(', ');
            result += '\n'
        });

        return result;
    }
}

