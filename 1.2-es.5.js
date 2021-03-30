"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};

let newpost = new Post('Denis', 'Lesson4', 2021);
console.log(newpost);
newpost.edit('new-text');
console.log(newpost);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let attachedPostEdit = new AttachedPost('Denis', 'Lesson4', 2021);
console.log(attachedPostEdit);
attachedPostEdit.makeTextHighlighted();
console.log(attachedPostEdit);

