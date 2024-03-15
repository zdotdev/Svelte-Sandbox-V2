<script>
    import Comp from './Comp.svelte'
    const name = "Zedrick" // the props name must be the same
    const person = {
        name: 'Zedrick',
        age: 21
    }
</script>
<div class="flex flex-col gap-4">
    <div>
        <p>With Props value:</p>
        <Comp {name} age={person.age}/> <!-- passing the props -->
    </div>
    <div>
        <p>Using default Props value:</p>
        <Comp />
    </div>
    <div>
        <p>Using Spread operator:</p>
        <Comp {...person}/> <!-- by using spread operator, you dont have to specify the value here, just declare the 
        element name as an export variable in props and it will automatically pass the value to the prop -->
    </div>
</div>