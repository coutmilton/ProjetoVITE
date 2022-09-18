export function Post(props) { // Função Post rececbe dois parametros e transcreve em author em bold e em text
    return ( 
        <div>
            <b>{props.author}</b> 
            <p>{props.content}</p>
        </div>
    )
}