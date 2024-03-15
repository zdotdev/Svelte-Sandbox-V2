<script>
    let sum = 0
    let mult = sum * 2 //this code will not be updated because it will just use the value of sum which always change
    $: multiply = sum * 2 /* This will work because multiply's value always change because sum always change and 
    thats how you trigger reactive */

    // this is reactive statement
    let num = 0
    $:{if(multiply >= 10){
        num++
    }}   
    // if(num == true){ // this code wont work because the value of num will never be monitored when changes happens
    //     div = multiply / 2
    // }
    let div
    $: {
        if(num >= 1){ // this will work because the value of num is updated. This is called reactive declaration
            div = multiply / 2
        }
    }
</script>
<p>Reaactive Declaration/Statement is a method in sveltekit where the variable relies on its value in terms of updating 
    the value itself. For example, if you are monitoring a value of a number and you will multiply it by 2, by using 
    reactive statement, you don't have to update the value of x expecially if it always change like in this 
    statement: z = x * 2, all you need is the reactive statement "$" to monitor the value of x and it will return 
    to the variable the product of the calculation
</p>
<div class="m-4 p-4">
    <p>Product of sum * 2: {multiply}</p>
    <p>Qoutient of product and sum: {div || 0}</p>
    <button on:click={() => {sum++; console.log(mult);
    }} class="bg-slate-200 p-4 rounded-lg">Increment: {sum}</button>
</div>