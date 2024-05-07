/*! Mutation Events v0.0.1 - (c) 2024 Maurice van Creij - MIT License - https://github.com/WoollyMittens */

// public handler class
export class MutationEvents {
	constructor(options) {
		// define the default options
		const defaults = {
			attributes: true,
			childList: true,
			subtree: true
		}
		// override the default options
		this.options = {...defaults, ...options};
		// start the intersection observer
		this.observer = new MutationObserver(this.handle.bind(this));
	}

	// adds an element to the observed list
	watch(elem, options) {
		// observe the given element
		this.observer.observe(elem, options || this.options);
	}

	// triggers an event for every mutation
	handle(mutations, observer) {
		for (let mutation of mutations) {
			let evt = new CustomEvent("change", {
				bubbles: true,
				cancelable: false,
				detail: {
					mutation: mutation,
					observer: observer,
				},
			});
			mutation.target.dispatchEvent(evt);
		}
	}
}

// expose the main class (disable if importing)
window.MutationEvents = MutationEvents;
