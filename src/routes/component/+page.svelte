<script>
    import Component from './component.svelte' // Always capital letter in importing component
    import LibComponent from '$lib/libComponent.svelte' // Accessing component from lib
</script>
<div class="flex flex-col items-center">
    <LibComponent />
    <p>Use component in svelte just like an element.</p>
    <Component/>
</div>