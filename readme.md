# Mutation Events

Simplifies the mutation observer so it can be used as an event.

## Instructions

``` javascript
    import { MutationEvents } from "./mutation-events.js";

    const mutationEvents = new MutationEvents({
        attributes: true,
        childList: false,
        subtree: false,
    });

    mutationEvents.watch(YOUR_ELEMENT);

    YOUR_ELEMENT.addEventListener("change", (evt) => {
        console.log('do this when YOUR_ELEMENT changes', evt);
    });
```

## License

&copy; Maurice van Creij. Licensed under [The MIT License](https://opensource.org/licenses/MIT).
