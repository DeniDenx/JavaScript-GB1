"use strict";
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

let newpost = new Post('Denis', 'Lesson4', 2021);
console.log(newpost);
newpost.edit('new-text');
console.log(newpost);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let attachedPostEdit = new AttachedPost('Denis', 'Lesson4', 2021);
console.log(attachedPostEdit);
attachedPostEdit.makeTextHighlighted();
console.log(attachedPostEdit);