import { makeAutoObservable } from "mobx";

class stateSaver {
	state = {userPopUpOpened:false,error3LVLOpened:false,errorP2POpened:false};

	setUserPopUpOpened=(newState)=>{
		console.log("newState",newState);
		this.state={...this.state,userPopUpOpened:newState};
	}
	setError3LVLOpened=(newState)=>{
		this.state={...this.state,error3LVLOpened:newState}
	}
	setErrorP2POpened=(newState)=>{
		this.state={...this.state,errorP2POpened:newState}
	}
	constructor() {
		makeAutoObservable(this);
	}
}
export default new stateSaver();
