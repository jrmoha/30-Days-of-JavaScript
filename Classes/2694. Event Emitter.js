class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(event, cb) {
        if (this.events.hasOwnProperty(event)) {
            this.events[event].push(cb);
        } else {
            this.events[event] = [cb];
        }
        return {
           unsubscribe: () => {
                this.events[event] = this.events[event].filter(e => e !== cb);
            }
        };
    }

    emit(event, args = []) {
        if (!this.events.hasOwnProperty(event)) return [];
        let res=[];
        this.events[event].forEach(cb => {
            res.push(cb(...args));
        });
        return res;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */