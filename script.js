function calculate() {

    let L = parseFloat(document.getElementById("length").value);
    let D = parseFloat(document.getElementById("diameter").value);
    let rho = parseFloat(document.getElementById("density").value);
    let mu = parseFloat(document.getElementById("viscosity").value);
    let V = parseFloat(document.getElementById("velocity").value);

    let Re = (rho * V * D) / mu;

    let flowType = "";

    if (Re < 2300) {
        flowType = "Laminar";
    } else if (Re <= 4000) {
        flowType = "Transitional";
    } else {
        flowType = "Turbulent";
    }

    let f;

    if (Re < 2300) {
        f = 64 / Re;
    } else {
        f = 0.3164 / Math.pow(Re, 0.25);
    }

    let pressureDrop =
        f * (L / D) * ((rho * V * V) / 2);

    document.getElementById("results").innerHTML = `
        <h3>Results</h3>

        <p><b>Reynolds Number:</b> ${Re.toFixed(2)}</p>

        <p><b>Flow Regime:</b> ${flowType}</p>

        <p><b>Friction Factor:</b> ${f.toFixed(5)}</p>

        <p><b>Pressure Drop:</b>
        ${pressureDrop.toFixed(2)} Pa</p>
    `;
}
