<script>
    import Component from './component.svelte'
    import Parent from './fam/parent.svelte'
    import ParentTwo from './famTwo/parent.svelte'

    let state = 'Odd'
    function eventDispatch(event){
        event.detail % 2 == 0 ? state = 'Even' : state = 'Odd'
    }

    let propagated = 1
    function propa(event){
        propagated++
    }

    let propagatedTwo
    function propaTwo(event){
        propagatedTwo = event.target.dataset.value
    }

    let bubblingVal = 'This must change if working'
    function bubbling(event){
        bubblingVal = event.detail
    }
    function newBubblingFuntion(event){
        bubblingVal = event.detail
    }

</script>

<div class="flex flex-col items-center">
    <div class="p-4 flex flex-col w-fit items-center gap-2 outline outline-2 m-4">
        <p>Event bubbling is a concept of passing an event from child to parent.</p>
        <div class="flex flex-col items-center">
            <p>{state}</p>
            <Component on:dataChange={eventDispatch}/>
        </div>
    </div>
    <div on:click={propa} class="flex flex-col items-center w-fit outline outline-2 m-4 p-4">
        <p>Propagating event is just like bubbling of event from the child element to parent element.</p>
        <div class="flex flex-col items-center" on:click={propaTwo}>
            <p>
                {#if propagated % 2 == 0}
                true
                {:else if propagated % 2 != 0}
                false
                {/if}
            </p>
            <p>{propagatedTwo || ''}</p>
            <button class="bg-slate-200 p-2 rounded-lg" data-value="Propagated">Propagate</button>
        </div>
    </div>
</div>

<div class="flex flex-col items-center gap-4 m-4">
    <p>Passing data with hierarchy grandchild => child => parent => main page wont work because component events don't bubble up. Here's some example:</p>
    <div class="flex flex-col items-center gap-4">
        <p>This won work because of indirect passing of data from grandchild, child, and parent.</p>
        <p>{bubblingVal}</p>
        <Parent on:dataChange={bubbling}/>
    </div>
    <div class="flex flex-col items-center gap-4">
        <p>This will work because the data is passed one by one by the components.</p>
        <p>{bubblingVal}</p>
        <ParentTwo on:passData={newBubblingFuntion}/>
    </div>
</div>