<script>
    import { tick } from "svelte";

    let num = 0
    $: double = num * 2
    function increment() {
        num++
        console.log(double); // this will start from current num which is 0, meaning this is outdated value.
        tick().then(()=> {
            console.log(double); /* this will start from the latest value of the num with incremented value which is 1 
            meaning this is updated value. */
        })
    }

    let value = ''
    async function toUpper() {
        const input = this
        let selectionStart = input.selectionStart /* selectionStart is a default function  to capture where the highlighted 
        input start */
        let selectionEnd = input.selectionEnd // same as above
        value = input.value.toUpperCase()

        // tick can also be use as async function
        await tick() /* every time the user highlight and change the text, the cursor will not go to to 
        the end of the line */
        input.selectionStart = selectionStart
        input.selectionEnd = selectionEnd
    }
</script>
<div class="p-4 flex flex-col gap-2 items-center">
    <div class="p-2 m-2 flex flex-col gap-2 w-fit items-center outline outline-2">
        <p>Tick is just like reactive declaration or statement, but it is inside a function.</p>
        <p>{num || 0}</p>
        <button on:click={increment} class="bg-slate-200 rounded-lg p-2">increment</button>
    </div>

    <div class="p-2 m-2 flex flex-col gap-2 w-fit items-center outline outline-2">
        <p>Other usage of tick(). This event is when the user  highlight a text input and directly change it, the cursor 
            position will not reset.
        </p>
        <input type="text" name="input" on:input={toUpper} {value} class="outline outline-1"> <!-- {value} is the value attribute -->
    </div>
</div>