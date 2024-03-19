import { onMount, beforeUpdate } from 'svelte';
export default function ComponentLifeCycle () {
    let elements = new Set();
    beforeUpdate(() => {
        elements.forEach(element => {
            element.style.outlineColor = 'red';

            setTimeout(() => {
                element.style.outlineColor = 'black';
            }, 1000);
        })
    });
    onMount(() => {
        elements.forEach(element => {
            element.style.outline = '2px solid';
        })
    });
    return function elemUpdate(node) { 
        elements.add(node);
        return {
            destroy() {
                elements.delete(node);
            }
        }
    }
}