class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let topElement = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return topElement;
    }

    top() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let topElement = this.queue1[0];
        this.queue2.push(this.queue1.shift());
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return topElement;
    }

    empty() {
        return this.queue1.length === 0;
    }
}
