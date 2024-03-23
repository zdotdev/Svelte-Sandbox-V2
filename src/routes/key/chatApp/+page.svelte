<script>
    import App from "./app.svelte";
</script>
<p>In this panel, key is used to recreate or reconstruct the Chat component to avoid delay every time the user chats different people. 
    The key recreates the chat panel to ensure the data is up-to-date because if the user change chats multiple times, there would be a 
    delay in loading the chat messages. The key is used to recreate the chat panel to avoid this delay.
</p>
<App />