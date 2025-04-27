// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    // Vibe Check button
    const vibeButton = document.getElementById("vibeButton");
    vibeButton.addEventListener("click", () => {
        alert("Vibe check passed! Keep it heady, bro! 😎");
    });

    // Menu button
    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", () => {
        const menu = `
HeadyBroz Menu

Bud
- $25 8th / $7.14 a G - $90 half
  Strains: Pressure, Frosted Guava
- $20 8th / $5 a G
  Strains: Organic Cherries
  Smalls: Candy Chrome

High Tide Hash Rosin Disposable (0.5g)
- $35 for one - $65 for two
  Strains: Zellos, Mad Honey, Sherbet, Biscotti Chunks, Purple Ice Water, Black Cherry Guava

HeadyBroz Pre-Rolls
- King Tree (1g king size joint): $15 for one, $20 for two
- Mini Trees (2 - 0.5g joints): $15 for one, $25 for two

High Tides Hash Rosin
- $90 2gram bucket
        `;
        alert(menu);
    });
});