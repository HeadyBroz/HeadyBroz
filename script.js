// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    // Vibe Check button
    const vibeButton = document.getElementById("vibeButton");
    vibeButton.addEventListener("click", () => {
        alert("Half Ounce & a Maine sourced dispo for $100!");
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
                <span style="color: #00e676;">Strains: SOLD OUT </span><br>
                - $20 8th / $5 a G<br>
                <span style="color: #00e676;">Strains: Captain Cruntz, Chocoloto Z </span><br>
                <span style="color: #00e676;"></span></p>
                <img src="Images/captaincruntz.jpeg" alt="captaincruntz" style="max-width: 100%; max-height: 300px; height: auto; width: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <img src="Images/chocolato.jpeg" alt="chocolato" style="max-width: 100%; max-height: 300px; height: auto; width: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <p><strong style="color: #6200ea;">Maine Sourced Live Resin Disposable (1g)</strong><br>
                - $35 for one - $60 for two<br>
                <span style="color: #00e676;">Strains: Lemon Berry, GMO</span></p>
                <img src="Images/gmo-dispo.jpeg" alt="GMO Live Resin Disposable" style="max-width: 100%; max-height: 300px; height: auto; width: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <img src="Images/lemonberry-dispo.jpeg" alt="LB Live Resin Disposable" style="max-width: 100%; max-height: 300px; height: auto; width: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <p><strong style="color: #6200ea;">Seréno Hash Rosin Disposable (0.5g)</strong><br>
                - $30 for one - $55 for two<br>
                <span style="color: #00e676;">Strains: SOLD OUT </span></p>
                <p><strong style="color: #6200ea;">HeadyBroz Pre-Rolls</strong><br>
                - King Tree (1g king size joint): $15 for one, $20 for two<br>
                - Mini Trees (2 - 0.5g joints): $15 for one, $25 for two<br>
                <span style="color: #00e676;">Strain: Candy Chrome - Infused and coated with Premium Distillate and Kief</span></p>
                <img src="Images/preroll.jpeg" alt="preroll" style="max-width: 100%; max-height: 300px; height: auto; width: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <p><strong style="color: #6200ea;">High Tides Hash Rosin</strong><br>
                - $90 2gram bucket SOLD OUT</p>
                <p><strong style="color: #6200ea;">Maine Sourced Hash Rosin</strong><br>
                - $40 per gram Animal Tsunami, Cliff House Cannabis $80 2g Bucket Grapes N' Cream</p> 
            <img src="Images/grapesn.jpeg" alt="Grapes N Cream" style="max-width: 100%; max-height: 300px; height: auto; width: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
            </div>
        `,
        confirmButtonText: "Close",
        confirmButtonColor: "#00e676",
        width: "90%",
        padding: "1em",
    });
});

    // Event button
    const eventButton = document.getElementById("eventButton");
    eventButton.addEventListener("click", () => {
        Swal.fire({
            title: "HeadyBroz Events",
            html: `
                <div style="text-align: left;">
                    <p><strong style="color: #6200ea;">Next Event TBD</strong><br>
                </div>
            `,
            confirmButtonText: "Close",
            confirmButtonColor: "#00e676",
            width: "90%",
            padding: "1em",
        });
    });
});
