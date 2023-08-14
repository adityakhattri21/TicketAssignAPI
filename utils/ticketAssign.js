class TicketAssign{
    constructor(){
        this.queue =  [];
        this.head = 0;
    }

    initializeQueue(users){
        this.queue=users;
    }

    rotate(){
        this.head = (this.head+1)%this.queue.length;
    }

    currentUser(){
        return this.queue[this.head];
    }
}

module.exports = TicketAssign;