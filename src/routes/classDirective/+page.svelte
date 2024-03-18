<script>
    let num = 0
    let numTwo = 0
    let numThree = 0
    $: changeColor = num == 0 ? 'black' : num % 2 == 0 ? 'green' : num % 2 != 0 ? 'red' : ''

    let numFour = 0
    $: black = numFour === 0
    $: green = numFour % 2 == 0
    $: red = numFour % 2 != 0
</script>

<div class="flex flex-col m-4">
    <p>Class:Directives is a method of updating class value when specific condtions are met.</p>
    <div class="flex gap-2 items-center p-4">
        <button on:click={ () => { num > 0 ? num-- : num = 0 } } class="bg-slate-200 rounded-lg p-2">-</button>
        <p class="{changeColor} font-bold">{num}</p>
        <button on:click={ () => { num++ } } class="bg-slate-200 rounded-lg p-2">+</button>
    </div>

    <div class="flex gap-2 items-center p-4">
        <button on:click={ () => { numTwo > 0 ? numTwo-- : numTwo = 0 } } class="bg-slate-200 rounded-lg p-2">-</button>
        <p class="{numTwo == 0 ? 'black' : numTwo % 2 == 0 ? 'green' : numTwo % 2 != 0 ? 'red' : ''} font-bold">{numTwo}</p>
        <button on:click={ () => { numTwo++ } } class="bg-slate-200 rounded-lg p-2">+</button>
    </div>

    <div class="flex gap-2 items-center p-4">
        <p>This is class directive:</p>
        <button on:click={ () => { numThree > 0 ? numThree-- : numThree = 0 } } class="bg-slate-200 rounded-lg p-2">-</button>
        <p 
        class:black={numThree === 0}
        class:green={numThree % 2 == 0}
        class:red={numThree % 2 != 0}
        class="font-bold">{numThree}</p>
        <button on:click={ () => { numThree++ } } class="bg-slate-200 rounded-lg p-2">+</button>
    </div>

    <div class="flex gap-2 items-center p-4">
        <p>Shorthand for class directive:</p>
        <button on:click={ () => { numFour > 0 ? numFour-- : numFour = 0 } } class="bg-slate-200 rounded-lg p-2">-</button>
        <p 
        class:black
        class:green
        class:red
        class="font-bold">{numFour}</p>
        <button on:click={ () => { numFour++ } } class="bg-slate-200 rounded-lg p-2">+</button>
    </div>

</div>

<style>
    .black {
        color: black;
    }
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>