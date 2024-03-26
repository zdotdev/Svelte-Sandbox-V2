export let value = ''
export function update(newValue) {
    value = newValue
    
    subcribers.forEach(fn => fn())
}
let subcribers = []
export function subscribe(fn) {
    subcribers.push(fn)
}