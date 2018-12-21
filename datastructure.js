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
}