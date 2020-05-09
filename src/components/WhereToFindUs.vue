<template>
<div class="where">
    <div class="container">
        <h2>Where to find us</h2>
        <div class="map">
            <div class="map-info">
                <p>Monday to Saturday</p>
                <p>From 09:00 to 14:00</p>
                <p>In Mercat de Santa Catalina, N19</p>
                <p><b>651820790</b></p>
                <p><b>paradad9@gmail.com</b></p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12301.940186096042!2d2.6387411!3d39.5712174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d0f2ea8b399a483!2sMercat%20de%20Santa%20Catalina!5e0!3m2!1sen!2ses!4v1588951074217!5m2!1sen!2ses" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.where {
    width: 100%;
    background-color: #0D3E87;
    color: white;
    padding-top: 2rem;
    padding-bottom: 5rem;
    .container {
        display: flex;
        flex-direction: column;
        max-width: 940px;
        margin: auto;
        padding: 2rem 0;
        padding: 1rem;
        .map {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .map-info {
                padding: 1rem;
                flex-grow: 1;
            }
            iframe {
                height: 300px;
                flex-grow: 1;
            }
        }
    }
}
</style>