// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    // Vibe Check button
    const vibeButton = document.getElementById("vibeButton");
    vibeButton.addEventListener("click", () => {
        alert("Create your own vibe by checking out our menu!");
    });

    // Menu button
    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", () => {
        Swal.fire({
            title: "HeadyBroz Menu",
            html: `
                <div style="text-align: left;">
                    <p><strong style="color: #6200ea;">Bud</strong><br>
                    - $25 8th / $7.14 a G - $90 half<br>
                    <span style="color: #00e676;">Strains: Pressure, Frosted Guava</span><br>
                    - $20 8th / $5 a G<br>
                    <span style="color: #00e676;">Strains: Organic Cherries</span><br>
                    <span style="color: #00e676;">Smalls: Candy Chrome</span></p>
                    <p><strong style="color: #6200ea;">High Tide Hash Rosin Disposable (0.5g)</strong><br>
                    - $35 for one - $65 for two<br>
                    <span style="color: #00e676;">Strains: Zellos, Mad Honey, Sherbet, Biscotti Chunks, Purple Ice Water, Black Cherry Guava</span></p>
                    <p><strong style="color: #6200ea;">HeadyBroz Pre-Rolls</strong><br>
                    - King Tree (1g king size joint): $15 for one, $20 for two<br>
                    - Mini Trees (2 - 0.5g joints): $15 for one, $25 for two</p>
                    <p><strong style="color: #6200ea;">High Tides Hash Rosin</strong><br>
                    - $90 2gram bucket</p>
                </div>
            `,
            confirmButtonText: "Close",
            confirmButtonColor: "#00e676",
            width: "90%",
            padding: "1em",
        });
    });
});