const keygen = require("keygenerator");

class User{
    constructor(firtsName,lastName, email, cryptedPassword){
        this.id = User.incrementId();
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.email = email;
        this.cryptedPassword = cryptedPassword;
        this.connected = false;
        this.currentKey = null;
        this.bucket = [];
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }

    connect() {
        this.connected = true;
        this.currentKey = keygen._();
    }

    disconnect() {
        this.connected = false;
        this.currentKey = null;
    }
}

let users = [
    new User("Fred", "Bergeron", "frederic.bergeron2@usherbrooke.ca", "acryptedpassword"),
    new User("Vincent", "Ducharme", "vincent.ducharme@usherbrooke.ca", "fdsfsdfsdf"),
    new User("Gabriel", "Girard", "gabriel.girard@usherbrooke.ca", "vcxvbxcbvcbvcbcb"),
    new User("Wathek Bellah", "Loued", "wathek.bellah.loued@usherbrooke.ca", "gbdfgcbfggsfdgreuiuo"),
    new User("Short", "Test", "short", "sfdgdfgghfht"),
];

module.exports.users = users;