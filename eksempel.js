// Håndtere en POST-forespørsel til ruten /brukere
app.post('/brukere', async (req, res) => {
    try {
        // Henter ut informasjon om den nye brukeren fra req.body
        const { navn, epost, passord } = req.body;

        // Kaller opprettBruker-funksjonen i brukerModellen for å legge til en ny bruker i databasen
        const nyBruker = await brukerModell.opprettBruker(navn, epost, passord);

        // Sender tilbake informasjon om den nye brukeren i JSON-format
        res.status(201).json(nyBruker)
    } catch (err) {
        // Hvis det oppstår en feil, sender vi en feilmelding til klient i JSON-format
        console.error(err);
        res.status(500).json({ error: 'Noe gikk galt! '});
    }
});