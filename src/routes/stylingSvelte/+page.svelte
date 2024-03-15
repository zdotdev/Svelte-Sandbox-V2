<script>
    import P from './component.svelte'
</script>
<div class="p-4 overflow-hidden">
    <p>Styling in Svelte is not like in the normal HTML, CSS, and JS files. The style is only used in one component unless 
        it is global. This design is only for this page or component. If i import other component, the design wont affect 
        it even if it has the same class, id, or element in my css. But if you add <strong>:global</strong> in the style 
        just like this ":global(p)", this css code will affect the imported component just like <P/>
    </p>
</div>
<!-- i already installed tailwind css tho lol -->
<style>
    :global(h1){
        color: rebeccapurple;
        font-weight: 900;
        font-size: 2rem;
        animation: wow 2s ease-in-out infinite both ;
    }
    /* To global a keyframe */
    @keyframes wow{
        0%{
            transform: translateX(0rem);
        }
        50%{
            transform: translateX(10rem);
        }
        100%{
            transform: translateX(0rem);
        }
    }
</style>