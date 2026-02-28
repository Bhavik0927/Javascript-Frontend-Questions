


class MyPromise{
	class(executor){
		this.state = 'pending';
		this.value = undefined;
		this.reason = undefined;

		this.onFullFilledCallbacks = [];
		this.onRejecedCallbacks = [];

		const resolve = (value) =>{
			if(this.state === 'pending'){
				this.state = 'success';
				this.value = value;

				queueMicroTasks(() => {
					this.onFullFilledCallbacks((cb) => cb(value))
				})
			}
		}

		const reject = (reason) =>{
			if(this.value === 'pending'){
				this.state = 'reject';
				this.reason = reason

				queueMicroTasks(() =>{
					this.onRejectedCallbacks((cb) => cb(value))
				})
			}
		}

		try{
			executor(resolve, reject);
		}
		catch(error){
			reject(error);
		}
	}
}

then(onFullfilled, onRejected){
	
	return new MyPromise((resolve,reject) =>{

		const handleFullfilled = (value) =>{
			try{
				const result = onFullFilled ? onFullFilled(value) : value;

				if(result instanceof MyPromise){
					result.then(resolve, reject);
				}else{
					resolve(result);
				}
			}catch(error){
				reject(error)
			}
		}


		const handleRejectd = (reason) =>{
			try{
				const result = onRejected ? onRejected(reason) : reason;

				if(result instanceof MyPromise){
					result.then(resolve, reject);
				}else{
					reject(reason)
				}
			}catch(error){
				reject(error);
			}
		}


		if(this.state === 'fulfilled'){
			queueMicroTasks(() => handleFullfilled(this.value));
		}else if(this.state === 'rejected'){
			queueMicroTasks(() => handleRejected(this.reason));
		}
		else{
			this.onFullFilledCallbacks.push(handleFullfilled);
			this.onRejectedCallbacks.push(handleRejected);
		}
	})
}


const p = new MyPromise((resolve,reject) =>{
	setTimeout((value) =>{
		console.log("Successful")
	},2000)
})


p.then((value) =>{
	console.log(value);
	return "Next step"
})