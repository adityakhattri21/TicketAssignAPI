class TicketAssign{
    constructor(){
        this.queue =  [];
        this.head = 0;
        this.length = this.queue.length;
    }

    initializeQueue(users){
        this.queue=users;
        this.length = this.queue.length;
    }

    rotate(){
        this.head = (this.head+1)%this.length;
    }

    currentUser(){
        return this.queue[this.head];
    }
}

module.exports = TicketAssign;