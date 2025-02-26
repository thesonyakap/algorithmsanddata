class MaxSlidingWindow {
    constructor() {
        this.deque = [];
    }

    push(val, index) {
        while (this.deque.length && this.deque[this.deque.length - 1][0] < val) {
            this.deque.pop();
        }
        this.deque.push([val, index]);
    }

    pop(index) {
        if (this.deque.length && this.deque[0][1] <= index) {
            this.deque.shift();
        }
    }

    max() {
        return this.deque[0][0];
    }
}

var maxSlidingWindow = function(nums, k) {
    let result = [];
    let window = new MaxSlidingWindow();

    for (let i = 0; i < nums.length; i++) {
        window.push(nums[i], i);
        if (i >= k - 1) {
            result.push(window.max());
            window.pop(i - k + 1);
        }
    }
    
    return result;
};
