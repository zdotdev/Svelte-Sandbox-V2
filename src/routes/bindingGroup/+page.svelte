<script>
    let checkBox = [1] // checkbox can declare a default variable to hold the selected value
    let radio = 1 // radio button is two way, which means if you add default value, it will be selected by the radio button
</script>
<div class="m-4">
    <p>Bind:group can only be use by the two types of input which are <strong>Radio button</strong> and <strong>Checkbox</strong>.</p>
    <div class="flex flex-col m-4">
        <p>Checkbox:</p>
        <label>
            <input type="checkbox" bind:group={checkBox} value="{1}">1
        </label>
        <label>
            <input type="checkbox" bind:group={checkBox} value="{2}">2
        </label>
        <label>
            <input type="checkbox" bind:group={checkBox} value="{3}">3
        </label>
        <p>Selected: {checkBox.join(', ')}</p>
    </div>

    <div class="flex flex-col m-4">
        <p>Radio button:</p>
        <label>
            <!-- radio buttons must have the same name to make the user choose 1 choice only -->
            <input type="radio" name="radGroup" bind:group={radio} value="{1}">1
        </label>
        <label>
            <input type="radio" name="radGroup" bind:group={radio} value="{2}">2
        </label>
        <label>
            <input type="radio" name="radGroup" bind:group={radio} value="{3}">3
        </label>
        <p>Selected: {radio || ''}</p>
    </div>
</div>