function solveClasses() {
    class Article {
        _content;
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        get content() {
            return this._content;
        }

        set content(value) {
            if (this.constructor === ShortReports && value.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }

            this._content = value;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        _originalResearch;
        constructor(title, content, originalResearch) {
            super(title, content);
            this.comments = [];
            this.originalResearch = originalResearch;
            let s = this.content;
        }
        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(value) {
            if (value.title === undefined || value.author === undefined) {
                throw new Error('The original research should have author and title.');
            }

            this._originalResearch = value;
        }

        addComment(comment) {
            this.comments.push(comment);
            return `The comment is added.`;
        }

        toString() {
            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearch['title']} by ${this.originalResearch['author']}`;
            if (this.comments.length > 0) {
                result += `\nComments:`;
                this.comments.forEach(element => {
                    result += `\n${element}`;
                });
            }

            return result;
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            this.clients.forEach(client => {
                if (client.clientName === clientName || client.orderDescription === orderDescription) {
                    throw new Error('This client has already ordered this review.');
                }
            });

            const newClient = {
                clientName,
                orderDescription
            };

            this.clients.push(newClient);

            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            let result = super.toString();
            result += `\nBook: ${this.book.name}`;

            if (this.clients.length > 0) {
                result += `\nOrders:`;
                this.clients.forEach(client => {
                    result += `\n${client.clientName} - ${client.orderDescription}`;
                });
            }

            return result;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}