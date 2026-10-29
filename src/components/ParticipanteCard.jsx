export default function ParticipanteCard({ participantes, onVotar }) {
    const { nome, foto, naRoca } = participantes;

    return <>
        


        <div className="cardParticipante">
            <article className={participantes.naRoca ? 'card cardRoca' : 'card'}>{participantes.naRoca && <span className="selo-roca">Na roça</span>}</article>
            <img src={participantes.foto} alt={participantes.nome} />
            <p>{participantes.nome}</p>
            <button onClick={() => onVotar(participantes)}>Votar para eliminar</button>
        </div>

    </>
}