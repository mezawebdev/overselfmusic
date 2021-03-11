<template>
    <div id="videos-page">
        <div class="container">
            <Title>VIDEOS</Title>
            <div class="grid">
                <iframe muted autoplay width="560" height="315" src="https://www.youtube.com/embed/lDIm4dA4VP4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jvESyI2G6aw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nf-s62B9ycg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ki-ISdoNRIs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from "~/components/Layout/Title.vue";
    export default { components: { Title } }
</script>

<style lang="scss">
    #videos-page {
        margin-top : 50px;
        box-sizing : border-box;

        * {
            box-sizing : border-box;
        }

        .grid {
            @media (min-width : 767px) {
                display               : grid;
                grid-template-columns : minmax(0, 1fr) minmax(0, 1fr);
                grid-gap              : 50px;
            }

            iframe {
                margin-bottom : 15px;
                width         : 100%;
                // width         : 755px;
                // height        : 424px;
                // max-width     : 100%;
                // max-height    : calc((100vw - 40px) / (16/9));

                @media (min-width : 767px) {
                    margin-bottom : 0px;
                }
            }
        }
    }
</style>
