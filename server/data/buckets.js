class BucketItem{
    constructor(book){
        this.id = BucketItem.incrementId();
        this.book = book;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }
}

module.exports.BucketItem = BucketItem;