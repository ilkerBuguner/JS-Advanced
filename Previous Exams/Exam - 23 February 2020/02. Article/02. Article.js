class Article {
    constructor(title, creator) {
        this.title = title,
        this.creator = creator,
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if(this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        else if(this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }
        else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
        }
    }

    like(username) {
        if(this._likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }
        else if(this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }
        else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if(!this._likes.includes(username)) {
            throw new Error(`You can't dislike this article!`);
        } else {
            const userIndex = this._likes.findIndex(user => user === username);
            this._likes.splice(userIndex, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        let comment;
        let indexOfComment;

        this._comments.forEach((currentComment, i) => {
            if(currentComment.Id === id) {
                comment = currentComment;
                indexOfComment = i + 1;
            }
        });

        if(id === undefined || comment === undefined) {
            const newComment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            };

            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        } else if(comment !== undefined) {
            const replyToAdd = {
                Id: ((indexOfComment + comment.Replies.length / 10) + 0.1).toFixed(1),
                Username: username,
                Content: content
            };
            comment.Replies.push(replyToAdd);
            return `You replied successfully`;
        }
    }
    
    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments:`;

        let sortedComments;
        if(sortingType === 'asc' ) {
            sortedComments = this._comments.sort((a, b) => a.Id - b.Id);
        } else if(sortingType === 'desc') {
            sortedComments = this._comments.sort((a, b) => b.Id - a.Id);
        } else if(sortingType === 'username'){
            sortedComments =this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
        }

        for (const comment of sortedComments) {
            result += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;

            if(comment.Replies.length > 0) {
                let sortedReplies;
                if(sortingType === 'asc') {
                    sortedReplies = comment.Replies.sort((a, b) => a.Id - b.Id);
                } else if(sortingType === 'desc') {
                    sortedReplies = comment.Replies.sort((a, b) => b.Id - a.Id);
                } else if(sortingType === 'username') {
                    sortedReplies = comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                }

                for (const reply of sortedReplies) {
                    result += `\n--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
                }
            }
        }

        return result;
    }
}

let art = new Article("My Article", "Anny");
console.log(art.like("a"));
console.log(art.like("b"));
console.log(art.dislike("b"));
console.log(art.like("b"));