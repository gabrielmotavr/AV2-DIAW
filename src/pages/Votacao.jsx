import { useEffect, useState } from "react";
import ParticipanteCard from "../components/ParticipanteCard";
import { listarNaRoca, listarParticipantes, registrarVoto } from "../services/votacaoService";

function Votacao() {

    const participantes = listarParticipantes();
    const naRoca = listarNaRoca();
    const registrarVoto = registrarVoto(id);
    const [participanteVotado, setParticipanteVotado] = useState(0);
    const [ultimoParticipanteVotado, setUltimoParticipanteVotado] = useState(null)

    function handleVotar(p) {
        registrarVoto(p.id)

        useEffect(() => {

            const nome = p.nome;
            console.log("votando em: " + participanteVotado)
            
            
        }, [participanteVotado]);
        
        //setParticipanteVotado(participanteVotado + 1);
    }



    return <>
        <h1>Votação</h1>

        <section className="home-roca">
            <h2>Na roça desta semana</h2>
            <ul className="home-roca-lista">
                {naRoca.map((p) => (
                    <ParticipanteCard participantes={p} onVotar={} key={p.nome}/>
                ))}
            </ul>
        </section>


    </>
}

export default Votacao;