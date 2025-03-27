const CLAN_TAG = "%23GUPJU0L2"; 
const API_KEY ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImViMzExOGY4LTQ1NWMtNDZmNi04MGVkLWY0ODQ2Nzk2NDA0OSIsImlhdCI6MTc0MTEyMjUzOCwic3ViIjoiZGV2ZWxvcGVyLzEyYmNmM2NiLTE3MmItMzM2ZS00MDU3LTcxNWVhYjM1NjFmYSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ny4xMDguODcuMjUiXSwidHlwZSI6ImNsaWVudCJ9XX0.J4C06KRTbCQAUlAe0nZdUFxe3MKrBs7YQ7l61KgqMUme4NubJr9Y7t6Sx61d7dO-pEozroz3GJousXIzIZYk8g"; // 🔴 Substitua pela chave correta da Supercell

async function fetchClanData() {
    try {
        const response = await fetch(`https://api.clashofclans.com/v1/clans/${CLAN_TAG}`, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao carregar informações do clã.");
        }

        const data = await response.json();
        document.getElementById("clan-info").innerHTML = `
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Nível:</strong> ${data.clanLevel}</p>
            <p><strong>Membros:</strong> ${data.members}/50</p>
            <p><strong>Pontos do Clã:</strong> ${data.clanPoints}</p>
            <p><strong>Descrição:</strong> ${data.description}</p>
        `;
    } catch (error) {
        document.getElementById("clan-info").innerText = error.message;
    }
}

fetchClanData(); // 🔥 Agora a função é chamada corretamente!
