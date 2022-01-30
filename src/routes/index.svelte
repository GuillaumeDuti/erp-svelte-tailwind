<script>
    import FormData from '../components/FormData.svelte'
    import Nav from '../components/Nav.svelte';
</script>

<div class="grid grid-cols-6 bg-slate-800">
    <Nav></Nav>
    <main class="col-span-5 p-10">
        <h1 class="text-center text-4xl font-bold text-gray-800 md:text-3xl uppercase my-10">Erp module</h1>
        <FormData/>
    </main>
</div>
