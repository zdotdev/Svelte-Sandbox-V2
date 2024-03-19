import { onMount, beforeUpdate } from 'svelte';
export default function ComponentLifeCycle () {
    let elements = new Set();
    beforeUpdate(() => { // triggered before the component is updated
        elements.forEach(element => {
            element.style.outlineColor = 'red';

            setTimeout(() => {
                element.style.outlineColor = 'black';
            }, 1000);
        })
    });
    onMount(() => { // triggered when the component is mounted to the dom
        elements.forEach(element => {
            element.style.outline = '2px solid';
        })
    });
    return function elemUpdate(node) { // triggered when the element is mounted or updated to the dom
        elements.add(node);
        return {
            destroy() {
                elements.delete(node); // triggered right after the element is removed from the dom
            }
        }
    }
}