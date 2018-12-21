function* ForwardListGenerator(forwardList) {
	let start = forwardList.head;
	let end = forwardList.tail;
    for (let it = start; it != end; it = it.next) {
        yield it;
    }
    return end;
}

class ForwardList{
	constructor(){
		this.node = {
			'element' : null,
			'next' : null
		}
		
		this.tail = this.node;
		this.head = this.node;
	}

	push_front(element){
		let node = {
			'element' : null, 
			'next' : null
		};
		node.element = element;
		node.next = this.head;
		this.head = node;
	}
}


class Stack{

	constructor(){
		this.container = [];
	}

	push(element){
		this.container.push(element);
	}

	pop(){
		this.container.pop();
	}

	top(){
		return this.container[this.container.length-1];
	}

	size(){
		return this.container.length;
	}

	empty(){
		if(this.container.length === 0)
			return true;
		else
			return false;
	}
}

class Queue{

	constructor(){
		this.container = [];
	}

	size(){
		return this.container.length;
	}

	empty(){
		if(this.container.length === 1)
			return true;
		else
			return false;
	}
}