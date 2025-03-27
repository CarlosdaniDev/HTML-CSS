<script>
    const CLAN_TAG = "%23GUPJU0L2";
    const API_KEY = "SUA_CHAVE_DA_API_AQUI"; // 🔴 Troque pela sua API Key real da Supercell

    async function fetchClanData() { }
    try { }
    const response = await fetch(`https://api.clashofclans.com/v1/clans/${CLAN_TAG}`, {headers}: {"Authorization"}: `Bearer ${API_KEY}`,
    "Accept": "application/json"
                }
            });

    if (!response.ok) { }
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
        } catch (error) {document.getElementById("clan-info").innerText = error.message};
        }
    }

    fetchClanData();
</script>;
